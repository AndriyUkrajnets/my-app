type Props = {
  name: string;
};

function Greeting({ name }: Props) {
  return <h1>Hello, {name}!</h1>;
}

export default Greeting;
