import { useRouteLoaderData } from '@remix-run/react';
import { Box, Flex, Heading, Text, Card, Grid, Link } from '@radix-ui/themes';
import {
    RiCalendarEventLine,
    RiCompass3Line,
    RiTeamLine,
} from '@remixicon/react';

export default function Home() {
    const { firstName } = useRouteLoaderData('routes/_dashboard') as {
        firstName: string;
    };

    return (
        <>
            <Box width={'full'}>
                <Flex align="center" mb="6" gap={{ initial: '1', md: '4' }}>
                    <Heading size="8" mb="6">
                        Welcome to CampusConnect, {firstName} 👋
                    </Heading>
                </Flex>
            </Box>

            <Card mb="8">
                <Text size="4">
                    Discover new friendships, exciting events, and build your
                    campus community.
                </Text>
            </Card>

            <Grid columns={{ initial: '1', sm: '2' }} gap="6" mb="8">
                <Card>
                    <Flex align="center" mb="2">
                        <RiTeamLine size={28} />
                        <Heading size="4" ml="2">
                            Connect with Friends
                        </Heading>
                    </Flex>
                    <Text as="p" mb="2">
                        Find study buddies, event companions, and friends who
                        share your interests.
                    </Text>
                    <Link href="/profile/friends">
                        <Text>Explore Friends →</Text>
                    </Link>
                </Card>

                <Card>
                    <Flex align="center" mb="2">
                        <RiCalendarEventLine size={28} />
                        <Heading size="4" ml="2">
                            Discover Events
                        </Heading>
                    </Flex>
                    <Text as="p" mb="2">
                        Join campus activities, workshops, and social gatherings
                        tailored to your interests.
                    </Text>
                    <Link href="/events">
                        <Text>Browse Events →</Text>
                    </Link>
                </Card>
            </Grid>

            <Box mb="8">
                <Heading size="6" mb="4">
                    Get Started
                </Heading>
                <ul className="list-disc pl-6">
                    <li>
                        <Link href="/profile" underline="always">
                            Complete your profile
                        </Link>{' '}
                        and add your interests
                    </li>
                    <li>
                        Browse{' '}
                        <Link href="/events" underline="always">
                            upcoming events
                        </Link>{' '}
                        and mark the ones you&apos;re interested in
                    </li>
                    <li>
                        Connect with friends who share similar interests or are
                        attending the same events
                    </li>
                    <li>Create your own events or study groups</li>
                </ul>
            </Box>

            <Card>
                <Flex align="center" mb="2">
                    <RiCompass3Line size={32} />
                    <Heading size="5" ml="2">
                        Explore Your Campus Community
                    </Heading>
                </Flex>
                <Text>
                    CampusConnect is your gateway to a more engaged, inclusive,
                    and vibrant campus life. Start exploring now and make the
                    most of your university experience!
                </Text>
            </Card>
        </>
    );
}
