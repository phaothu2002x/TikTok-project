import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
    const [posts, setPosts] = useState([]);
    const [types, setTypes] = useState("posts");
    const [showGoToTop, setShowGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${types}`)
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            });
        console.log(types);
    }, [types]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
            {tabs.map((tab) => (
                <button
                    key={tab}
                    style={
                        tab === types
                            ? {
                                  color: "lightblue",
                                  background: "#fff",
                              }
                            : {}
                    }
                    onClick={() => setTypes(tab)}
                >
                    {tab}
                </button>
            ))}

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>

            {showGoToTop && (
                <button
                    style={{
                        position: "fixed",
                        bottom: 20,
                        right: 20,
                    }}
                >
                    go to top
                </button>
            )}
        </div>
    );
}

export default Content;
