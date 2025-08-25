import { GET, SENDDATA } from "../../services/apiService";

function Home() {
    const handleSendData = async () => {
        try {
            const res = await GET(SENDDATA);
            console.log("res:", res);
        } catch (error) {
            console.error("Error sending data");
        }
    };

    return (
        <div>
            <button onClick={handleSendData}>Test</button>
        </div>
    );
}

export default Home;