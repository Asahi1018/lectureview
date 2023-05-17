import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Inter, Big_Shoulders_Display } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const big_Shoulders_Display = Big_Shoulders_Display({ subsets: ["latin"] });

import {
  Select,
  Input,
  Box,
  Button,
  createStyles,
  Textarea,
  Header,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    padding: "0 20px",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
  },
  icon_container: {
    position: "absolute",
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    top: 20,
    left: 40,
  },

  main_container: {
    margin: "95px 20px 30px",
  },
  input_wrapper: {
    margin: "20px 0 60px",
  },
  input: {
    marginTop: "15px",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <Box>
      <Head>
        <title>Lectureview</title>
        <meta
          name="description"
          content="東京理科大学の講義をレビューするサイトです。"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className={classes.header} height={65}>
        <Box className={classes.icon_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#00abfb"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
            <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
          </svg>
        </Box>
        <h1 className={big_Shoulders_Display.className}>Lectureview</h1>
      </Header>
      <main className={classes.main_container}>
        <form action="/review" className="label" method="POST">
          <Input.Wrapper className={classes.input_wrapper}>
            <Input.Label htmlFor="lecture" size="xl">
              レビューする講義
            </Input.Label>
            <Input
              className={classes.input}
              name="lecture"
              id="lecture"
            ></Input>
          </Input.Wrapper>

          <Input.Wrapper className={classes.input_wrapper}>
            <Input.Label htmlFor="score" size="xl">
              評価
            </Input.Label>
            <Select
              className={classes.input}
              id="score"
              name="score"
              data={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
              ]}
            ></Select>
          </Input.Wrapper>
          <Input.Wrapper className={classes.input_wrapper}>
            <Input.Label htmlFor="comment" size="xl">
              コメント
            </Input.Label>
            <Textarea
              className={classes.input}
              name="comment"
              id="comment"
              placeholder="太郎先生は頭が悪い。"
              autosize
              minRows={10}
            />
          </Input.Wrapper>

          <Button type="submit" size="lg">
            送信
          </Button>
        </form>
      </main>
    </Box>
  );
}
