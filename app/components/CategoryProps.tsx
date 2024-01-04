"use client";

type Props = {
  title: string;
};

const CategoryProps = ({ title }: Props) => {
  return <span>{title}</span>;
};

export default CategoryProps;
