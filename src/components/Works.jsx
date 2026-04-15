/* eslint-disable react-refresh/only-export-components */
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactReadMoreReadLess from 'react-read-more-read-less';

const ProjectCard = ({ index, name, description, tags, image, view }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            onClick={() => window.open(view, '_blank')}
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[20px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>
            <ReactReadMoreReadLess
              charLimit={50}
              readMoreText={'Read more ▼'}
              readLessText={'Read less ▲'}
              readMoreClassName={'text-yellow-100'}
              readLessClassName={'text-yellow-100'}
            >
              {description}
            </ReactReadMoreReadLess>
          </p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 gap-7'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
