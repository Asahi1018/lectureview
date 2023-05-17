import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Select,
  Input,
  Box,
  Button,
  createStyles,
  Textarea,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  main: {
    margin: "30px auto",
  },
  input_wrapper: {
    margin: "20px 0",
  },
  input: {
    display: "inline-block",
    width: "100%",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <Box className={styles.container}>
      <Head>
        <title>Lectureview</title>
        <meta
          name="description"
          content="東京理科大学の講義をレビューするサイトです。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <form action="/review" className="label" method="POST">
          <Input.Wrapper className={classes.input_wrapper}>
            <Input.Label htmlFor="lecture" size="xl">
              レビューする講義
            </Input.Label>
            <Input name="lecture" id="lecture"></Input>
          </Input.Wrapper>

          <Input.Wrapper className={classes.input_wrapper}>
            <Input.Label htmlFor="score" size="xl">
              評価
            </Input.Label>
            <Select
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
            <Input type="s" id="score" name="score"></Input>
          </Input.Wrapper>
          <Input.Wrapper className={classes.input_wrapper}>
            <Input.Label htmlFor="comment" size="xl">
              コメント
            </Input.Label>
            <Textarea
              name="comment"
              id="comment"
              placeholder="Autosize with no rows limit"
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
