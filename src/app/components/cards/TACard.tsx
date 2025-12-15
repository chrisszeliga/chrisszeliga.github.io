import Image from "next/image";
import styles from './styles/TACard.module.css'

export default function TACard() {
  return (
    <div className={styles.container}>
      <div className={styles['title-wrapper']}>
        <h1>UNDERGRADUATE</h1>
        <h2>TEACHING<br />ASSISTANT</h2>
        <img src="/images/ta-photo.jpeg" alt="TA Photo"></img>
      </div>
      
      <p>I worked as an Undergraduate Teaching Assistant for a 120-student Advanced Data Structures course (CS 351), supporting both professors and graduate TAs. Throughout the semester, I helped students understand and implement a wide range of topics, including linked lists, maps, skip lists, Huffman encoding, balanced trees (AVL, Red-Black, B-Trees), splay trees, heaps (binary, binomial, Fibonacci), tries, suffix arrays/trees, disjoint sets, Bloom filters, cuckoo hashing, XOR filters, and graph algorithms.<br /><br />In addition to answering questions on Piazza throughout the week, I attended every lecture to assist with the in-class practice drills, debug code in real time, and guide students through whiteboard-style explanations of algorithms and data structure operations. I also served as the project manager for multiple full-stack student group projects, offering code reviews and feedback, providing architectural and technical guidance, ensuring correct use of advanced data structures in their backend logic, and grading each milestone of their semester-long project.</p>
      <img src="/images/341-class-photo.jpeg" alt="Class Photo"></img>
    </div>
  )
}