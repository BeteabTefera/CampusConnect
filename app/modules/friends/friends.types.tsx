export interface FriendshipStatusControlProps {
    friendRequest:
        | {
              uid1: number;
              uid2: number;
              status: string;
          }
        | undefined;
    userId: number;
    id: number;
}
