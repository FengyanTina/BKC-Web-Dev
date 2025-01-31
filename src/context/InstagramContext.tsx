import { createContext, useContext, useEffect, useState } from "react";
import { getDocs, addDoc, collection, query, where } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";
 // Update with your Firebase config

type InstagramPost = {
  id: string;
  caption: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};

type InstagramContextType = {
  posts: InstagramPost[];
  loading: boolean;
};

const InstagramContext = createContext<InstagramContextType | undefined>(undefined);

export const InstagramProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchInstagramPosts = async () => {
      setLoading(true);
      try {
        // 1️⃣ Check Firestore for cached Instagram posts
        const snapshot = await getDocs(collection(db, "instagramPosts"));
        const cachedPosts = snapshot.docs.map((doc) => doc.data() as InstagramPost);

        if (cachedPosts.length > 0) {
            console.log("Loaded posts from Firestore:", cachedPosts);
          setPosts(cachedPosts);
        } else {
          // 2️⃣ Fetch from Instagram API if Firestore is empty
          const response = await fetch(
            `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=YOUR_ACCESS_TOKEN`
          );
          const data = await response.json();
          if (data?.data) {
            // Store the posts in the state
            setPosts(data.data);
            console.log("Fetched posts from Instagram API:", data.data);
  
            // Cache the fetched posts to Firestore
            data.data.forEach(async (post: InstagramPost) => {
              // Check if this post already exists in Firestore
              const existingPostQuery = query(
                collection(db, "instagramPosts"),
                where("id", "==", post.id)
              );
              const existingDocs = await getDocs(existingPostQuery);
  
              if (existingDocs.empty) {
                // Add the new post to Firestore if it doesn't exist
                await addDoc(collection(db, "instagramPosts"), post);
                console.log(`Post with id ${post.id} added to Firestore.`);
              } else {
                console.log(`Post with id ${post.id} already exists in Firestore.`);
              }
            });
          }
        }
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <InstagramContext.Provider value={{ posts, loading }}>
      {children}
    </InstagramContext.Provider>
  );
};

// Custom hook to use Instagram Context
export const useInstagram = () => {
  const context = useContext(InstagramContext);
  if (!context) {
    throw new Error("useInstagram must be used within an InstagramProvider");
  }
  return context;
};
