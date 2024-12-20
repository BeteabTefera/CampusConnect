import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import { getFriendsList } from '~/modules/friends/friends.core';
import { Box, Heading, Card, Flex, Avatar, Text } from '@radix-ui/themes';
import { getUserById } from '~/modules/users/users.core';
import { Friend } from '~/modules/friends/friends.types';
import { UserProfile } from '~/modules/users/users.types';
import { Modal } from '~/components/modal';
import { RiUserLine } from '@remixicon/react';

export async function loader({ params }: LoaderFunctionArgs) {
    const { id: userId } = params;
    if (!userId) throw new Error('User ID not provided');

    try {
        const friendsList = await getFriendsList(Number(userId));
        const userProfile = await getUserById(Number(userId));

        return friendsList.length > 0
            ? { friendsList, userProfile, userId: Number(userId) }
            : { friendsList: [], userProfile, userId: Number(userId) };
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export default function UserFriends() {
    const { friendsList, userProfile, userId } = useLoaderData<
        typeof loader
    >() as {
        friendsList: Friend[];
        userProfile: UserProfile;
        userId: number;
    };

    return (
        <Modal onCloseTo={`/user/${userId}`} size="600">
            <Heading size="8" mb="6">
                {userProfile.firstName}&apos;s Friends
            </Heading>
            <Flex direction="column" gap="4">
                {friendsList.map((friend) => (
                    <Card key={friend.id}>
                        <Flex align="center" gap="4">
                            <Avatar
                                radius="full"
                                size="5"
                                src={friend.profilePicture}
                                fallback={`${friend.firstName[0]}${friend.lastName[0]}`}
                            />
                            <Box>
                                <Link to={`/user/${friend.id}`}>
                                    <Text size="3" weight="bold">
                                        <Flex align="center" gap="2">
                                            {`${friend.firstName} ${friend.lastName}`}{' '}
                                            <RiUserLine size={18} />
                                        </Flex>
                                    </Text>
                                </Link>
                            </Box>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </Modal>
    );
}
