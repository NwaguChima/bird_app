import { getProviders } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <div>
      <img
        src="https://image.winudf.com/v2/image/Y29tLmxha25vY2suZ2l6YV9zY3JlZW5fMl8ybHA5MjhoZQ/screen-2.jpg?fakeurl=1"
        alt="bird app ui in a phone"
      />
      <div>
        {Object.values(providers).map((provider) => (
          <div>
            <img
              src="https://www.svgrepo.com/show/88851/cute-bird.svg"
              alt="bird app logo"
            />
            <p>This app is created for learning purposes</p>
            <button>Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signin;
