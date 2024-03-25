import { FC, useState } from "react";
import { HTag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from "@/Layout/Layout/Layout";

const Home: FC = () => {
  const [rating, setRating] = useState<number>(4);

  const [counter, setCounter] = useState<number>(0);

  return (
    <>
      <HTag tag="h1">{counter}</HTag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => {
          setCounter((x) => x + 1);
        }}
      >
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка2
      </Button>
      <Paragraph size="s">
        Напишу сразу в двух курсах, так как проходил оба.
      </Paragraph>
      <Paragraph>Напишу сразу в двух курсах, так как проходил оба.</Paragraph>
      <Tag href="https://dev.to/eprikhodko/eslint-prettier-vs-code-create-react-app-airbnb-52bc">
        Photoshop
      </Tag>
      <Tag color="gray" size="l">
        10
      </Tag>
      <Tag color="green">-10 000</Tag>
      <Tag color="red">hh.ru</Tag>
      <Tag color="primary">Работа в Photoshop</Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
    </>
  );
};

export default withLayout(Home);
