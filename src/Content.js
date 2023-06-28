import { useEffect, useState } from "react";

function Content() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        // cleanUp
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handleImg = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };
    return (
        <div>
            <h1>choose file:</h1>
            <input type="file" onChange={handleImg} />
            <br />
            {avatar && (
                <img
                    style={{ marginTop: 30 }}
                    src={avatar.preview}
                    alt=""
                    width="50%"
                />
            )}
        </div>
    );
}

export default Content;
