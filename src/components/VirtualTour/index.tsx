'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './VirtualTour.module.css';

export default function VirtualTour() {
  return (
    <section className={styles.virtualTourSection}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Nelson Mandela's Cell
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cell number 5, where Nelson Mandela spent 18 of his 27 years in prison, 
            has become a powerful symbol of resistance, hope, and the triumph of the 
            human spirit over adversity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.imageContainer}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/The_President_Dr._A.P.J._Abdul_Kalam_paid_a_visit_to_Robben_Island_and_unlocked_the_Male_Solitary_Cell_No._5%2C_in_which_former_President_of_South_Africa_Dr._Nelson_Mandela_spent_27_years%2C_while_imprisoned%2C_on_September_15%2C_2004.jpg"
            alt="Nelson Mandela's prison cell (Cell No. 5) on Robben Island"
            fill
            className={styles.cellImage}
            priority
            quality={100}
          />
          <div className={styles.caption}>
            <p>
              Nelson Mandela's cell on Robben Island, where he spent 18 years of his imprisonment.
              The small space contained only a bucket toilet, a small table, and a bed on the floor.
            </p>
            <span className={styles.credit}>
              Credit: Government of India Archives
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <blockquote className={styles.quote}>
            "I could walk the length of my cell in three paces. When I lay down, I could feel the wall with my feet and my head grazed the concrete at the other side."
            <footer className={styles.quoteAuthor}>
              — Nelson Mandela, Long Walk to Freedom
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}