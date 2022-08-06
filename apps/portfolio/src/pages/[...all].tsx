import { useParams } from 'react-router-dom';

const Page = () => {
  const p = useParams();
  console.log(p);
  return <div>404</div>;
};
export default Page;
