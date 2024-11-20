import { db } from 'db/src';

/* Docs
 * https://www.coderbased.com/p/user-friends-system-and-database
 */

/**
 * Add a friend request
 * @param fromId
 * @param toId
 * @returns
 */
export async function addFriendRequest(fromId: number, toId: number) {
    const friendRequest = await db
        .insertInto('userFriend')
        .values({
            uid1: fromId,
            uid2: toId,
            status: 'REQ_UID1',
        })
        .executeTakeFirst();

    return friendRequest;
}

/**
 * Get pending friend requests sent to me
 * @param id
 * @returns uid1, uid2, status
 */
export async function getPendingFriendRequest(userId: number, id: number) {
    const friendRequest = await db
        .selectFrom('userFriend')
        .select(['uid1', 'uid2', 'status'])
        .where('uid1', '=', id)
        .where('uid2', '=', userId)
        .unionAll(
            db
                .selectFrom('userFriend')
                .select(['uid1', 'uid2', 'status'])
                .where('uid2', '=', id)
                .where('uid1', '=', userId)
        )
        .executeTakeFirst();

    return friendRequest;
}

/**
 * Get friends list
 * @param id
 * @returns
 */
export async function getFriendsList(id: number) {
    const friendsList = await db
        .selectFrom('userFriend')
        .fullJoin('users', 'users.id', 'userFriend.uid2')
        .select([
            'users.id',
            'users.firstName',
            'users.lastName',
            'users.email',
            'users.profilePicture',
        ])
        .where('uid1', '=', id)
        .where('status', '=', 'friend')
        .unionAll(
            db
                .selectFrom('userFriend')
                .fullJoin('users', 'users.id', 'userFriend.uid1')
                .select([
                    'users.id',
                    'users.firstName',
                    'users.lastName',
                    'users.email',
                    'users.profilePicture',
                ])
                .where('uid2', '=', id)
                .where('status', '=', 'friend')
        )
        .execute();

    return friendsList;
}

/**
 * Accept friend request
 * @param fromId
 * @param toId
 * @returns
 */
export async function acceptFriendRequest(fromId: number, toId: number) {
    const friendRequest = await db
        .updateTable('userFriend')
        .set({
            status: 'friend',
        })
        .where('uid1', '=', fromId)
        .where('uid2', '=', toId)
        .executeTakeFirstOrThrow();

    return friendRequest;
}

/**
 * Reject friend request
 * @param fromId
 * @param toId
 * @returns
 */
export async function rejectFriendRequest(fromId: number, toId: number) {
    const friendRequest = await db
        .deleteFrom('userFriend')
        .where('uid1', '=', fromId)
        .where('uid2', '=', toId)
        .execute();

    return friendRequest;
}
