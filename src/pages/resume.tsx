export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "/files/resume.pdf",
            permanent: false,
        },
    };
};

const GithubRedirect = () => null;

export default GithubRedirect;
