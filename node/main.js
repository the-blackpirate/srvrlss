const mongo = require("mongodb");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const auth = admin
  .initializeApp({
    credential: admin.credential.cert({
      projectId: "srvrlss",
      clientEmail: "firebase-adminsdk-z5jxo@srvrlss.iam.gserviceaccount.com",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCeBBcbDSGK37G+\nnm+0EYpB2HL972y8b9T7HO5rCVbcqzdRLrUi9zJDuYQjREw1buTr9KWIrscX8kEw\n5pkrf1nLwGnkA5mozJC5NBfZxhHvRSFvlKc3CH76qYGt+4r1fGCxt/q7cm8t5d5T\naVgmbZDulKz2htH4Ql32fScHxlSbMmn6wrJExwtGgWTBKrfTa4scSM9fG52q+KZq\nBdWjCZyAXkSq/YbQuVKiKopOyIAVTJdYutpr2pf5Huhxj2/EU2SanOiBN3KhPngy\n5Jl91EuululZNgs2G/6zt88fhLL4hlZQtkR6NdWDg7VvDkx9qd+M5LissDHbvBaF\nqBmylsANAgMBAAECggEABlsLwt7IVpmgwJYG0CtUcEmQdn5G1V16J4+GV2/Mupt4\nYh+K0Zk3wFmZ4wFAP3XyZzsz3UeKYoAv9xOPXZyFtBhNKgqrB4sS1yAtRWkeF42k\nRqSoBSKmWNawjJrtf+o8yWkpAJkdt67jPl+iWAlYJwB75H6Pu3iP5vYpt7pWdNeF\n/4iKhMDyKC3mQg3fCZI+3za3SPl5vxMSjE5S6OkcvLlth9ABF5Xd5lHjJIlhogg/\nr2gyEuBk07M4HwHcJKaYGV+TELM/hXM1PmmFc4/GsnRWxfy+I4AJnQzoPPHXEoua\ngUy+wNvnyMXH8q+xS2YI2xKNAWTfAlSqNjmBOY8g0QKBgQDfE/brxpVkDM1IYFvd\nQCaRhUeR1Z4a3Pr2mjl/zpmsOTGoY/L0LAWt+yoaJQwn6xUxaRHVdElPwgM38i1J\nji4LaRXThNFdlmifk1qhbY4sJJoSsW5lWej6bzVf8tIa64XbAPSm+PjDvP8doJ/x\nkIibSWArYoAOU2KaNIwrakBWVwKBgQC1VgoejJ6HpngM2A4RZz9+TdGazJ8LGnCD\n+asA1G9j3OmTOOhMwlOMKSiyWwUqYfkTnVEU+/1OCHzS2t6KlKqFF+unBeLCOyDy\nfkAsZshtyvSPunkqTc8SiQX/5KEcexEVcgOmSKcO/Yc+BmfAywKNk5mFhptRD5Ff\nSiTrRAe2OwKBgQCd3DnrBT9oaqrGYfIAMspYRjGsYLeemOw7oE26RNB4kIy0de5S\nnehzAv77O2ZLxU7dBVZqb/0FJO00JPupRqUMzBN2+FFUYgCtlBAZljZ6xHgHbGoL\n7MEyn4ns2R+Xjz3NCfMXSa54jYEXTTiCMF6LTTRx3yVxfc6UA0WB35GhxwKBgB4F\napN4MF7A3qsxsdKLx2U/uO3p5oLOE8altPvkL7TWxAzNpRfgLDjOL6CnlQlZQwVO\nTDgvJ9adbRzzg1hqGHkEZs02Gj6Rz3iWEkXHlnMm4KpS8vBgBWJKMSYWUd4HOeLV\nB2mmKZI/wv4vzUmL0pZh007Z5CjdbPHbspUIpEY1AoGAS1nV3EP6EaIVtvsDAh7o\nBoQwwjwXIEOsMnudGvfAPclvwZqKhwTRBCqh9mn8wRrO91PqP1FYuJbHi2CFoHxB\nB8AtTBJEKp5Q3McApXxz44ZEuuR7ZLeH/DjtdGK72mlmlUKW9gJUdTP+xr3trl6H\np70MfNejXyVg0kU1pZko0Bw=\n-----END PRIVATE KEY-----\n"
    }),
    databaseURL: "https://srvrlss.firebaseio.com"
  })
  .auth();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const MongoClient = mongo.MongoClient;



const uri =
  "mongodb+srv://testUser:;;;;;;;;@cluster0-crklv.gcp.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.get("/GetTopics", async (req, res) => {
  try {
    const topics = await client
      .db("test")
      .collection("topics")
      .find({})
      .addQueryModifier("$orderby", { lastActivity: -1 })
      .toArray();

    topics.map((_, i) => {
      topics[i].topicID = topics[i]._id;
    });

    console.log(topics);
    res.json(topics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get("/GetTopic", async (req, res) => {
  try {
    const topicID = req.query["topic"];

    const topic = await client
      .db("test")
      .collection("topics")
      .findOne({ _id: new mongo.ObjectID(topicID) });

    console.log(topic);
    res.json(topic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get("/GetReplies", async (req, res) => {
  try {
    const topicID = req.query["topic"];

    const repliesObj = await client
      .db("test")
      .collection("replies")
      .find({ topicID: new mongo.ObjectID(topicID) })
      .addQueryModifier("$orderby", { timestamp: 1 })
      .toArray();

    const replies = new Array(repliesObj.length);
    const promises = new Array(repliesObj.length);

    repliesObj.map((reply, i) => {
      promises.push(
        (async () => {
          const userData = await auth.getUser(reply.author);

          replies[i] = {
            ...reply,
            author: userData.displayName,
            authorImage: userData.photoURL,
            authorUID: reply.author,
            replyID: reply._id
          };
        })()
      );
    });

    await Promise.all(promises);

    console.log(replies);
    res.json(replies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.post("/CreateTopic", async (req, res) => {
  const body = req.body;
  const timestamp = Date.now();

  try {
    const topic = await client
      .db("test")
      .collection("topics")
      .insertOne({
        author: body.author,
        replyCount: 0,
        tags: body.tags,
        createdOn: timestamp,
        lastActivity: timestamp,
        title: body.title
      });

    await client
      .db("test")
      .collection("replies")
      .insertOne({
        topicID: topic.insertedId,
        author: body.author,
        likes: 0,
        likers: [],
        message: body.message,
        first: true,
        timestamp: timestamp
      });

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.post("/CreateReply", async (req, res) => {
  const body = req.body;
  const timestamp = Date.now();

  try {
    await client
      .db("test")
      .collection("replies")
      .insertOne({
        topicID: new mongo.ObjectID(body.topicID),
        author: body.author,
        likes: 0,
        likers: [],
        message: body.message,
        first: false,
        timestamp: timestamp
      });

    await client
      .db("test")
      .collection("topics")
      .updateOne(
        { _id: new mongo.ObjectID(body.topicID) },
        {
          $set: { lastActivity: timestamp },
          $inc: { replyCount: 1 }
        }
      );

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get("/LikeReply", async (req, res) => {
  const uid = req.query["uid"];
  const replyID = req.query["replyID"];

  try {
    await client
      .db("test")
      .collection("replies")
      .updateOne(
        { _id: new mongo.ObjectID(replyID) },
        {
          $addToSet: { likers: uid },
          $inc: { likes: 1 }
        }
      );

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get("/UnlikeReply", async (req, res) => {
  const uid = req.query["uid"];
  const replyID = req.query["replyID"];

  try {
    await client
      .db("test")
      .collection("replies")
      .updateOne(
        { _id: new mongo.ObjectID(replyID) },
        {
          $pull: { likers: uid },
          $inc: { likes: -1 }
        }
      );

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

app.get("/DeleteReply", async (req, res) => {
  const replyID = req.query["replyID"];
  const topicID = req.query["topicID"];

  try {
    await client
      .db("test")
      .collection("replies")
      .deleteOne({ _id: new mongo.ObjectID(replyID) });

    await client
      .db("test")
      .collection("topics")
      .updateOne(
        { _id: new mongo.ObjectID(topicID) },
        {
          $set: { lastActivity: Date.now() },
          $inc: { replyCount: -1 }
        }
      );

    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
});

client.connect(err => {
  if (err) {
    throw err;
  }
  app.listen(port, () => console.log(`app listening on port: ${port}`));
});
