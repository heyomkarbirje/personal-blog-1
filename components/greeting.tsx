import { styled, Grid, Text, Avatar, Box, A, Image, Heading1 } from "./theme"

const Container = styled(Grid, {
  gridTemplateColumns: "auto 1fr",
  gridGap: "$2",
  alignItems: "center",
  mt: "$5",
  mb: "$4",
})

const AuthorAvatar = styled(Avatar, {
  height: 72,
  width: 72,
  borderRadius: "100%",
  backgroundColor: "$muted",
})

export default function Greeting() {
  return (
    <Container>
      <AuthorAvatar src="/avatars/@steveruizok.jpg" />
      <Text css={{ my: 0 }}>
        <b>Hi, I’m Omkar.</b> I write about founders and startup at{" "}
        <A href="https://pastprofile.com">PastProfile</A>. If
        you’d like to say hello, follow me on{" "}
        <A href="https://twitter.com/heyomkarbirje">twitter</A> or{" "}
        <A href="https://twitter.com/pastprofile">github</A>.
      </Text>
    </Container>
  )
}
