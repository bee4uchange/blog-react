import React from "react";
import { Container, Image, Text, Textarea } from "@nextui-org/react";
import "./Post.styles.scss";

const Post = () => {
  return (
    <Container>
      <div className="post-container">
        <div className="post-wrapper">
          <div className="post-header">
            <div className="post-title">
              <Text h1 size={50} weight="bold">
                Multiple models of Google Pixel 6a pass through FCC, pointing to
                wider international release
              </Text>
            </div>
            <div className="post-info"></div>
          </div>

          <Image
            src="https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/05/google_pixel_family_01-1.jpg?w=2000&quality=82&strip=all&ssl=1"
            alt="Default Image"
            objectFit="cover"
            width={1200}
            height={500}
          />

          <div className="post-body">
            <Text
              css={{ width: "1000px", textAlign: "justify", padding: "2rem 0" }}
            >
              While it feels like the Pixel 6 series just made its debut
              recently, we’re quickly approaching the launch of more Pixel
              phones. Next up is the Pixel 6a, which could very well be getting
              a wider launch than last year’s A-Series phone, according to FCC
              listings. When the Pixel 5a launched last year, unlike the Pixel
              3a and 4a before it, Google only released it in the United States
              and Japan, leaving out many of the core global markets for
              affordable Android phones. Following the success of the Pixel 6,
              it’s not a stretch to think Google would want to put that phone’s
              Tensor chip in the hands of more people, and it seems that may
              once again include a broader international release. A trio of FCC
              listings (A4RGB62Z, A4RG1AZG, A4RGX7AS) were spotted by
              MySmartPrice this morning, at least one of which can be directly
              tied to the brand name “Pixel 6a” through Canada’s Radio Equipment
              List. The three devices are remarkably similar in terms of what
              frequency bands they use and even in the simple fact that they
              arrived at the FCC at the same time. All of this suggests that the
              three model numbers (as well as a fourth, A4RGB17L, mentioned
              briefly) all point to the same device, the Pixel 6a. So why are so
              many models needed? This has been a common practice for the Pixel
              series in recent years, with Google submitting separate model
              numbers and FCC listings to account for things like the inclusion
              of mmWave on only some models and for phones with support for
              slightly different bands of connectivity used around the world. In
              one snippet of a test report, some of the differences in the Pixel
              6a models are explained. Specifically, the GX7AS model will have
              support for the n38 and n41 bands of 5G connectivity, while the
              G1AZG will offer mmWave 5G. It’s not clear at this point which
              model(s) will be sold in the United States and through carriers.
              Given Google’s focus on affordability for the A-Series, it’s
              interesting to see the company continue to offer models with
              mmWave connectivity, which has thus far added a noticeable cost
              increase versus phones without it. The FCC listings don’t teach us
              much else about the Pixel 6a, but luckily we’ve already learned
              quite a bit over the last few months, including the phone’s use of
              a Tensor chip, its camera arrangement, and even what packaging the
              phone will have. A launch date has not yet been set for the Pixel
              6a, but this latest step of certification removes one of the final
              roadblocks to release.
            </Text>
          </div>

          <div className="post-footer">
           <textarea />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Post;
