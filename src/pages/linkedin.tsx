export const getServerSideProps = async () => {
    return {
        redirect: {
            destination: "https://www.linkedin.com/in/shikharg97/",
            permanent: false,
        },
    };
};

const LinkedinRedirect = () => null;

export default LinkedinRedirect;
