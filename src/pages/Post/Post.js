import React from "react";
import { Container, Image, Text } from "@nextui-org/react";
import "./Post.styles.scss";

const Post = () => {
  return (
    <Container>
      <div className="post-container">
        <div className="post-wrapper">
          <div className="post-header">
            <div className="post-title">
              <Text h1 size={30} weight="bold">
                Emoji Kitchen gets summer-ready combos with watermelon, cherry,
                and more
              </Text>
            </div>
            <div className="post-info"></div>
          </div>

          <Image
            src="https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2021/09/gboard_emoji_kitchen_1.jpg?w=2000&quality=82&strip=all&ssl=1"
            alt="Default Image"
            objectFit="cover"
            width={1200}
            height={500}
          />

          <div className="post-body">
            <Text
              css={{ width: "1000px", textAlign: "justify", padding: "2rem 0" }}
            >
              The latest update to Emoji Kitchen is rolling out some new summery
              sticker combos with watermelons, cherries, and more. Depending on
              which hemisphere you live in, you may notice the weather steadily
              getting warmer as summer is on approach. As the heat turns up, one
              of the best ways to cool down is eating fresh fruits like
              watermelon and cherries. Google’s Emoji Kitchen certainly agrees.
              If you’ve not had the chance to use Emoji Kitchen, it’s one of the
              most delightful recent additions to Gboard on Android, allowing
              you to combine two emojis into a single sticker or double-up a
              particular emoji to often comedic effect. Since launch, Emoji
              Kitchen has steadily expanded, offering increasingly bizarre
              combinations. As spotted by Emojipedia, the latest beta update to
              Gboard introduces four new emojis to be mixed together: cherries
              (🍒), watermelon (🍉), paws (🐾), and rock (🪨). The cherries
              combo in ways you might expect, like putting other emojis at the
              end of the stems or turning certain emojis into a cherry. My
              personal favorite here is the combo with the poop emoji to add a
              little cherry on top. Combining any facial emoji with the
              watermelon gives the sliced fruit a new expression, while most
              other combos involve adding a watermelon rind. This includes the
              bizarre mixture of summer and fall that is the watermelon
              jack-o-lantern. The paws emoji is a lot harder to combine with
              others, but one particularly terrifying sticker uses the pawprints
              as eyes. Meanwhile, rock is far more versatile for the Emoji
              Kitchen, in most cases turning an emoji to stone or creating a
              statue. Humorously, the rock combines with the skull emoji to
              create a neanderthal skull.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Post;
