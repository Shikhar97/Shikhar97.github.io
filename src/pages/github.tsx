export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "https://github.com/BhandarkarPawan",
            permanent: false,
        },
    };
};

const GithubRedirect = () => null;

export default GithubRedirect;
