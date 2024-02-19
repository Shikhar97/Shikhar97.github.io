export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "https://github.com/Shikhar97",
            permanent: false,
        },
    };
};

const GithubRedirect = () => null;

export default GithubRedirect;
