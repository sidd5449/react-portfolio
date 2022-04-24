import React from 'react'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href = 'https://www.linkedin.com/in/siddhesh-thakare-665954209/' target='blank'><div>
            <BsLinkedin />
        </div></a>
        <a href = 'https://instagram.com/sidd_thakare0203' target='blank'><div>
            <BsInstagram />
        </div></a>
        <a href = 'https://github.com/sidd5449'target='blank'><div>
            <FaGithub />
        </div></a>
    </div>
  )
}

export default SocialMedia