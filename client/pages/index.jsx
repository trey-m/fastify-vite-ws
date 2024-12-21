import useSocket from '../hooks/useSocket';
import Navbar from '../components/Navbar';

export function getMeta() {
  return {
    title: 'za'
  };
}

export default function Index() {
  const { socket, connected } = useSocket();

  return (
    <div>
      <Navbar connected={connected} />
    </div>
  );
}
