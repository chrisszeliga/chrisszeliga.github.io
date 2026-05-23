import styles from './styles/YALLMCard.module.css'

export default function YALLMCard() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>YET ANOTHER</h1>
        <div className={styles.subtitleRow}>
          <p className={styles.large}>LARGE</p>
          <h2 className={styles.subtitle}>LANGUAGE<br />MODEL</h2>
        </div>
        <p className={styles.description}>I developed a distributed end-to-end language modeling pipeline in Scala called Yet Another LLM, built to explore how large-scale language models are put together across data processing, training, and deployment. The project starts with a Hadoop MapReduce-based ETL pipeline that processes large text corpora by sharding datasets, tokenizing text, computing token frequencies, and generating Word2Vec embeddings using DeepLearning4j for scalable preprocessing. This stage was designed to handle large volumes of data efficiently while distributing work across multiple nodes. The generated embeddings are then fed into a Spark-based training pipeline that uses sliding-window techniques to create context-aware training samples and train a neural language model across distributed AWS infrastructure. By distributing the training process, the system can process larger datasets more efficiently while improving throughput and reducing preprocessing bottlenecks. Finally, I deployed the project as a production-style inference service using an Akka HTTP server on EC2, routing requests through API Gateway and AWS Lambda to Amazon Bedrock’s Command R model for scalable real-time text generation.</p>
      </div>
      <div className={styles.right}>
        <img src="/images/YALLM-image.png" alt="YALLM Image" className={styles.image}></img>
      </div>
    </div>
  )
}

//