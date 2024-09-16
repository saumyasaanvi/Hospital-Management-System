import React, { useEffect, useState } from 'react';

const Home = () => {
    const [news, setNews] = useState([]);

    const getFeeds = async () => {
        try {
            const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/gb.json');
            const data = await response.json();
            setNews(data.articles);
        } catch (error) {
            console.error('Error fetching news feeds:', error);
        }
    };

    useEffect(() => {
        getFeeds();
    }, []);

    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <div style={styles.headWrapper}>
                    <div>
                        <div style={styles.greet}>Hello</div>
                        <p>Let's help you book an appointment today</p>
                    </div>
                    <a href="/dashboard" style={styles.profile}>
                        <img
                            src="https://th.bing.com/th/id/OIP.ZE16CYpVSpHWWjn2cJrewAHaHZ?pid=ImgDet&rs=1"
                            alt=""
                            style={styles.profileImage}
                        />
                    </a>
                </div>
                <input
                    type="search"
                    placeholder="Search"
                    style={styles.searchbar}
                />
            </div>
            <div style={styles.newsFeed}>
                <p style={styles.newsHead}>Top Health News</p>
                <div style={styles.feeds}>
                    {news.map((feed, i) => (
                        <div key={i} style={styles.feed}>
                            <img
                                src={feed.urlToImage}
                                alt=""
                                style={styles.feedImage}
                            />
                            <h3>
                                <a href={feed.url} style={styles.newsLink} target="_blank" rel="noopener noreferrer">
                                    {feed.title}
                                </a>
                            </h3>
                            <p>Source: {feed.source.name}</p>
                            <p>Author: {feed.author || 'Anonymous'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: '2rem',
        maxWidth: '1200px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        marginBottom: '2rem',
    },
    headWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    greet: {
        fontWeight: '600',
        fontSize: '20px',
        color: '#0048b2',
    },
    profile: {
        borderRadius: '50%',
    },
    profileImage: {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    searchbar: {
        width: '100%',
        marginTop: '1rem',
        padding: '0.5rem',
        borderRadius: '8px',
        border: '1px solid #ccc',
    },
    newsFeed: {
        width: '100%',
    },
    newsHead: {
        color: '#0048b2',
        fontWeight: '500',
        fontSize: '24px',
        marginBottom: '1rem',
    },
    feeds: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px',
    },
    feed: {
        background: '#f5f5f5',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    feedImage: {
        width: '100%',
        height: '180px',
        borderRadius: '8px',
        objectFit: 'cover',
    },
    newsLink: {
        color: '#0048b2',
        textDecoration: 'none',
    },
};

export default Home;
