import '../style/style.css';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: 'Yahya Ouchchen', role: 'Computer Science Major' },
  { name: 'Mercedes Cullen', role: 'Business Finance Major' },
  { name: 'Caroline Rich', role: 'Psychology Major' },
  { name: 'Nankabirwa, Shukra Jaliya', role: 'Computer Science Major' },
];

export default function Conclusion() {
  return (
    <motion.div
      className="conclusion-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.h1
        className="conclusion-title"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Thank You for Exploring Our Project
      </motion.h1>

      <motion.p
        className="conclusion-description"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We hope this experience has provided meaningful insight into the complexities of homelessness and the impact of federal funding.
        Our team thoughtfully designed each visualization and interaction to make the data more accessible and actionable — thank you for exploring this journey with us.
      </motion.p>

      <motion.div
        className="team-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="team-title">Project Team</h2>
        <ul className="team-list">
          {teamMembers.map((member, idx) => (
            <li key={idx} className="team-member">
              <span>{member.name}</span>
              <span className="team-role">{member.role}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}