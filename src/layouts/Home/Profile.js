import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am Aklile Getachew, a passionate and driven software engineering graduate with a
      natural talent and a strong desire to excel in my field. Right now, I am making
      waves as a dedicated developer, determined to carve my path in the industry. My
      ambition is to become a prominent figure in the world of development, and I've
      diligently built a powerful personal brand that revolves around excellence and
      unwavering determination.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Throughout my journey, I have achieved remarkable milestones that showcase both my
      skill set and my unyielding dedication to the field. I have proven myself by
      consistently enhancing user experiences, streamlining workflows, and creating
      cutting-edge software solutions that push the boundaries of what's possible.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Beyond my personal achievements, I am committed to fostering innovation within the
      tech community. I actively engage in various tech communities, encouraging my peers
      to think outside the box and challenge conventional norms. My aim is to inspire
      others to unlock their full potential and embrace their journey of growth.
    </Text>
    {/* <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time I like to play Chess, play video games, and watching movies 
    </Text> */}
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                // href="/contact"
                href="#"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in Alx Office"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
