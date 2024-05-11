interface Publication {
  title: string
  authors: string
  abstract: string
  venue: string
  imgSrc?: string
  arxivURL?: string
  pdfURL?: string
  websiteURL?: string
  githubURL?: string
  dataURL?: string
  award?: string
  year: number
}

const publicationsData: Publication[] = [
  {
    title:
      'Pug: Photorealistic and semantically controllable synthetic data for representation learning',
    authors:
      'Florian Bordes, Shashank Shekhar, Mark Ibrahim, Diane Bouchacourt, Pascal Vincent, Ari Morcos',
    abstract: `Synthetic image datasets offer unmatched advantages for designing and evaluating deep neural networks: 
        they make it possible to (i) render as many data samples as needed, (ii) precisely control each scene and yield 
        granular ground truth labels (and captions), (iii) precisely control distribution shifts between training and 
        testing to isolate variables of interest for sound experimentation.Despite such promise, the use of synthetic 
        image data is still limited -- and often played down -- mainly due to their lack of realism. Most works therefore 
        rely on datasets of real images, which have often been scraped from public images on the internet, and may have 
        issues with regards to privacy, bias, and copyright, while offering little control over how objects precisely appear.
        In this work, we present a path to democratize the use of photorealistic synthetic data: we develop a new generation 
        of interactive environments for representation learning research, that offer both controllability and realism. 
        We use the Unreal Engine, a powerful game engine well known in the entertainment industry, to produce PUG 
        (Photorealistic Unreal Graphics) environments and datasets for representation learning. Using PUG for evaluation and 
        fine-tuning, we demonstrate the potential of PUG to both enable more rigorous evaluations and to improve model training.`,
    imgSrc: '/static/images/PUG.png',
    venue:
      'Neural Information Processing Systems (NeurIPS) Conference, 2023: Datasets and Benchmark Track',
    websiteURL: 'https://pug.metademolab.com/',
    arxivURL: 'https://arxiv.org/abs/2308.03977',
    pdfURL: 'https://arxiv.org/pdf/2308.03977.pdf',
    githubURL: 'https://github.com/facebookresearch/PUG',
    dataURL: 'https://pug.metademolab.com/datasets.html',
    year: 2023,
  },
  {
    title: 'A Cookbook Of Self-Supervised Learning',
    authors: 'Randall Balestriero, Mark Ibrahim, Vlad Sobal, Ari Morcos, Shashank Shekhar, et al.',
    abstract: `Self-supervised learning, dubbed the dark matter of intelligence, is a promising path to advance machine 
    learning. Yet, much like cooking, training SSL methods is a delicate art with a high barrier to entry. While many 
    components are familiar, successfully training a SSL method involves a dizzying set of choices from the pretext tasks
    to training hyper-parameters. Our goal is to lower the barrier to entry into SSL research by laying the foundations 
    and latest SSL recipes in the style of a cookbook. We hope to empower the curious researcher to navigate the terrain 
    of methods, understand the role of the various knobs, and gain the know-how required to explore how delicious SSL can be.`,
    imgSrc: '/static/images/publications/SSLCookbook.png',
    venue:
      'International Conference on Machine Learning (ICML) Tutorial, 2023:\nSelf-Supervised Learning in Vision: from Research Advances to Best Practices',
    websiteURL: 'https://ai.meta.com/blog/self-supervised-learning-practical-guide/',
    arxivURL: 'https://arxiv.org/abs/2304.12210',
    pdfURL: 'https://arxiv.org/pdf/2304.12210.pdf',
    year: 2023,
  },
  {
    title:
      'Objectives Matter: Understanding the Impact of Self-Supervised Objectives on Vision Transformer Representations',
    authors: 'Shashank Shekhar, Florian Bordes, Pascal Vincent, Ari Morcos',
    abstract: `Joint-embedding based learning (e.g., SimCLR, MoCo, DINO) and reconstruction-based learning (e.g., BEiT, SimMIM, MAE) are the two leading paradigms for self-supervised learning of vision transformers, but they differ substantially in their transfer performance. Here, we aim to explain these differences by analyzing the impact of these objectives on the structure and transferability of the learned representations. Our analysis reveals that reconstruction-based learning features are significantly dissimilar to joint-embedding based learning features and that models trained with similar objectives learn similar features even across architectures. These differences arise early in the network and are primarily driven by attention and normalization layers. We find that joint-embedding features yield better linear probe transfer for classification because the different objectives drive different distributions of information and invariances in the learned representation. These differences explain opposite trends in transfer performance for downstream tasks that require spatial specificity in features. Finally, we address how fine-tuning changes reconstructive representations to enable better transfer, showing that fine-tuning re-organizes the information to be more similar to pre-trained joint embedding models.`,
    venue:
      'International Conference on Learning Representations (ICLR), 2023:\nWorkshop on Mathematical and Empirical Understanding of Foundation Models',
    imgSrc: '/static/images/publications/objectives.png',
    arxivURL: 'https://arxiv.org/abs/2304.13089',
    pdfURL: 'https://arxiv.org/pdf/2304.13089',
    award: 'Spotlight',
    year: 2023,
  },
  {
    title: 'Beyond Neural Scaling Laws: Beating Power Law Scaling Via Data Pruning',
    authors: 'Ben Sorscher, Robert Geirhos, Shashank Shekhar, Surya Ganguli, Ari Morcos',
    abstract: `Widely observed neural scaling laws, in which error falls off as a power of the training set 
    size, model size, or both, have driven substantial performance improvements in deep learning. However, 
    these improvements through scaling alone require considerable costs in compute and energy. Here we focus 
    on the scaling of error with dataset size and show how in theory we can break beyond power law scaling 
    and potentially even reduce it to exponential scaling instead if we have access to a high-quality data 
    pruning metric that ranks the order in which training examples should be discarded to achieve any pruned 
    dataset size. We then test this improved scaling prediction with pruned dataset size empirically, and 
    indeed observe better than power law scaling in practice on ResNets trained on CIFAR-10, SVHN, and ImageNet.
    Next, given the importance of finding high-quality pruning metrics, we perform the first large-scale 
    benchmarking study of ten different data pruning metrics on ImageNet. We find most existing high performing 
    metrics scale poorly to ImageNet, while the best are computationally intensive and require labels for every 
    image. We therefore developed a new simple, cheap and scalable self-supervised pruning metric that 
    demonstrates comparable performance to the best supervised metrics. Overall, our work suggests that the 
    discovery of good data-pruning metrics may provide a viable path forward to substantially improved neural 
    scaling laws, thereby reducing the resource costs of modern deep learning.`,
    venue: 'Neural Information Processing Systems (NeurIPS) Conference, 2022',
    imgSrc: '/static/images/publications/scaling_law_theory-1.png',
    arxivURL: 'https://arxiv.org/abs/2206.14486',
    pdfURL: 'https://arxiv.org/pdf/2206.14486',
    githubURL: 'https://github.com/rgeirhos/dataset-pruning-metrics',
    dataURL: 'https://github.com/rgeirhos/dataset-pruning-metrics/tree/master/metric-scores',
    award: 'Outstanding Paper Award',
    year: 2022,
  },
  {
    title:
      'Understanding contrastive versus reconstructive self-supervised learning of Vision Transformers',
    authors: 'Shashank Shekhar, Florian Bordes, Pascal Vincent, Ari Morcos',
    abstract: `WWhile self-supervised learning on Vision Transformers (ViTs) has led to state-ofthe-art 
    results on image classification benchmarks, there has been little research on
    understanding the differences in representations that arise from different training
    methods. We address this by utilizing Centred Kernel Alignment for comparing
    neural representations learned by contrastive learning and reconstructive learning,
    two leading paradigms for self-supervised learning. We find that the representations
    learned by reconstructive learning are significantly dissimilar from representations
    learned by contrastive learning. We analyze these differences, and find that they
    start to arise early in the network depth and are driven mostly by the attention and
    normalization layers in a transformer block. We also find that these representational
    differences translate to class predictions and linear separability of classes in the pretrained models. 
    Finally, we analyze how fine-tuning affects these representational differences, and discover that a 
    fine-tuned reconstructive model becomes more similar to a pre-trained contrastive model.`,
    venue:
      'Neural Information Processing Systems (NeurIPS) Workshop, 2022: Self-Supervised Learning - Theory and Practice',
    imgSrc: '/static/images/publications/ssl_neuripsw.png',
    pdfURL: 'https://sslneurips22.github.io/paper_pdfs/paper_50.pdf',
    year: 2022,
  },
  {
    title: "Inductive Biases for Higher-Order Visual Cognition (Master's Thesis)",
    authors: 'Shashank Shekhar',
    abstract: ``,
    venue: 'University of Guelph Library Atrium, 2022',
    imgSrc: '/static/images/publications/thesis.png',
    pdfURL:
      'https://atrium.lib.uoguelph.ca/bitstreams/9815e57d-5e5e-43f2-a959-3321df0d7701/download',
    websiteURL: 'https://atrium.lib.uoguelph.ca/items/8d42d7d7-c0ca-411f-9b26-c3b682f47e16',
    award: 'CAIAC Outstanding Thesis Nominee',
    year: 2022,
  },
  {
    title:
      'Neural response time analysis: Explainable artificial intelligence using only a stopwatch',
    authors: 'Eric Taylor, Shashank Shekhar, Graham Taylor',
    abstract: `How would you describe the features that a deep learning model composes if
    you were restricted to measuring observable behaviours? Explainable artificial
    intelligence (XAI) methods rely on privileged access to model architecture and
    parameters that is not always feasible for most users, practitioners and regulators. 
    Inspired by cognitive psychology research on humans, we present a case
    for measuring response times (RTs) of a forward pass using only the system
    clock as a technique for XAI. Our method applies to the growing class of
    models that use input-adaptive dynamic inference and we also extend our
    approach to standard models that are converted to dynamic inference post
    hoc. The experimental logic is simple: If the researcher can contrive a stimulus
    set where variability among input features is tightly controlled, differences in
    RT for those inputs can be attributed to the way the model composes those features. 
    First, we show that RT is sensitive to difficult, complex features by comparing RTs from 
    ObjectNet and ImageNet. Next, we make specific a priori
    predictions about RT for abstract features present in the SCEGRAM data set,
    where object recognition in humans depends on complex intrascene objectobject relationships. 
    Finally, we show that RT profiles bear specificity for class
    identity and therefore the features that define classes. These results cast light
    on the model's feature space without opening the black box.`,
    venue: 'Wiley Applied AI Letters, 2021',
    imgSrc: '/static/images/publications/nrt-wiley.png',
    pdfURL: 'https://onlinelibrary.wiley.com/doi/pdf/10.1002/ail2.48',
    dataURL: 'https://borealisdata.ca/dataset.xhtml?persistentId=doi:10.5683/SP2/OQU7QG',
    year: 2021,
  },
  {
    title: 'Neural Structure Mapping For Learning Abstract Visual Analogies',
    authors: 'Shashank Shekhar, Graham W Taylor',
    abstract: `Scene graph generation is an important task in computer vision aimed at improving the semantic understanding of 
    the visual world. In this task, the model needs to detect objects and predict visual relationships between them.
    Most of the existing models predict relationships in parallel assuming their independence. While there are different ways to 
    capture these dependencies, we explore a conditional approach motivated by the sequence-to-sequence
    (Seq2Seq) formalism. Different from the previous research, our proposed model predicts visual relationships one at
    a time in an autoregressive manner by explicitly conditioning on the already predicted relationships. Drawing
    from translation models in NLP, we propose an encoderdecoder model built using Transformers where the encoder captures global context and long range interactions.
    The decoder then makes sequential predictions by conditioning on the scene graph constructed so far. In addition, we introduce a novel reinforcement learning-based
    training strategy tailored to Seq2Seq scene graph generation. By using a self-critical policy gradient training approach with Monte Carlo search we directly optimize for
    the (mean) recall metrics and bridge the gap between training and evaluation. Experimental results on two public
    benchmark datasets demonstrate that our Seq2Seq learning approach achieves strong empirical performance, outperforming previous state-of-the-art,
     while remaining efficient in terms of training and inference time.`,
    venue:
      'Neural Information Processing Systems (NeurIPS) Workshop, 2021:\nShared Visual Representations in Humans and Machines',
    imgSrc: '/static/images/publications/nsm.png',
    arxivURL: 'https://openreview.net/forum?id=By5Uwd_xzNF',
    pdfURL: 'https://openreview.net/pdf?id=By5Uwd_xzNF',
    year: 2021,
  },
  {
    title: 'Context-aware scene graph generation with seq2seq transformers',
    authors:
      'Yichao Lu, Himanshu Rai, Jason Chang, Boris Knyazev, Guangwei Yu, Shashank Shekhar, Graham W Taylor, Maksims Volkovs',
    abstract: `Scene graph generation is an important task in computer vision aimed at improving the semantic understanding of 
    the visual world. In this task, the model needs to detect objects and predict visual relationships between them.
    Most of the existing models predict relationships in parallel assuming their independence. While there are different ways to 
    capture these dependencies, we explore a conditional approach motivated by the sequence-to-sequence
    (Seq2Seq) formalism. Different from the previous research, our proposed model predicts visual relationships one at
    a time in an autoregressive manner by explicitly conditioning on the already predicted relationships. Drawing
    from translation models in NLP, we propose an encoderdecoder model built using Transformers where the encoder captures global context and long range interactions.
    The decoder then makes sequential predictions by conditioning on the scene graph constructed so far. In addition, we introduce a novel reinforcement learning-based
    training strategy tailored to Seq2Seq scene graph generation. By using a self-critical policy gradient training approach with Monte Carlo search we directly optimize for
    the (mean) recall metrics and bridge the gap between training and evaluation. Experimental results on two public
    benchmark datasets demonstrate that our Seq2Seq learning approach achieves strong empirical performance, outperforming previous state-of-the-art,
     while remaining efficient in terms of training and inference time.`,
    venue: 'International Conference on Computer Vision (ICCV), 2021',
    imgSrc: '/static/images/publications/intro_split-1.png',
    pdfURL:
      'https://openaccess.thecvf.com/content/ICCV2021/papers/Lu_Context-Aware_Scene_Graph_Generation_With_Seq2Seq_Transformers_ICCV_2021_paper.pdf',
    githubURL: 'https://github.com/layer6ai-labs/SGG-Seq2Seq',
    year: 2021,
  },
  {
    title: 'Response Time Analysis for Explainability of Visual Processing in CNNs',
    authors: 'Eric Taylor, Shashank Shekhar, Graham Taylor',
    abstract: `Explainable artificial intelligence (XAI) methods rely on
    access to model architecture and parameters that is not always feasible for most users, practitioners, and regulators.
    Inspired by cognitive psychology, we present a case for response times (RTs) as a technique for XAI. 
    RTs are observable without access to the model. Moreover, dynamic inference models performing conditional computation generate
    variable RTs for visual learning tasks depending on hierarchical representations. We show that MSDNet, a 
    conditional computation model with early-exit architecture, exhibits slower RT for images with more complex features in
    the ObjectNet test set, as well as the human phenomenon of scene grammar, where object recognition depends on intrascene 
    object-object relationships. These results cast light on MSDNet’s feature space without opening the black box
    and illustrate the promise of RT methods for XAI.`,
    venue: 'Computer Vision and Pattern Recognition (CVPR) Workshop, 2020:\nMinds vs Machines',
    imgSrc: '/static/images/publications/rt-cc.png',
    pdfURL:
      'https://openaccess.thecvf.com/content_CVPRW_2020/papers/w26/Taylor_Response_Time_Analysis_for_Explainability_of_Visual_Processing_in_CNNs_CVPRW_2020_paper.pdf',
    award: 'Oral',
    year: 2020,
  },
  {
    title:
      'Operator-in-the-Loop Deep Sequential Multi-Camera Feature Fusion for Person Re-identification',
    authors:
      'KL Navaneet, Ravi Kiran Sarvadevabhatla, Shashank Shekhar, R Venkatesh Babu, Anirban Chakraborty',
    abstract: `Given a target image as query, person re-identification systems retrieve a ranked list of 
    candidate matches on a per-camera basis. In deployed systems, a human operator scans these lists and 
    labels sighted targets by touch or mouse-based selection. However, classical re-id approaches generate 
    per-camera lists independently. Therefore, target identifications by operator in a subset of cameras 
    cannot be utilized to improve ranking of the target in remaining set of network cameras. To address 
    this shortcoming, we propose a novel sequential multi-camera re-id approach. The proposed approach can 
    accommodate human operator inputs and provides early gains via a monotonic improvement in target ranking.
    At the heart of our approach is a fusion function which operates on deep feature representations of query
    and candidate matches. We formulate an optimization procedure custom-designed to incrementally improve 
    query representation. Since existing evaluation methods cannot be directly adopted to our setting, we 
    also propose two novel evaluation protocols. The results on two large-scale re-id datasets (Market-1501,
    DukeMTMC-reID) demonstrate that our multi-camera method significantly outperforms baselines and other 
    popular feature fusion schemes. Additionally, we conduct a comparative subject-based study of human operator
    performance. The superior operator performance enabled by our approach makes a compelling case for its 
    integration into deployable video-surveillance systems.`,
    venue: 'IEEE Transactions on Information Forensics and Security (TIFS), 2019',
    imgSrc: '/static/images/publications/reid.png',
    arxivURL: 'https://arxiv.org/abs/1807.07295',
    pdfURL: 'https://arxiv.org/pdf/1807.07295',
    year: 2019,
  },
  {
    title: 'From Strings to Things: Knowledge-Enabled VQA Model That Can Read and Reason',
    authors: 'Ajeet Kumar Singh, Anand Mishra, Shashank Shekhar, Anirban Chakraborty',
    abstract: `Text present in images are not merely strings, they provide useful cues about the image.
    Despite their utility inbetter image understanding, scene texts are not used in traditional visual 
    question answering (VQA) models. In this work, we present a VQA model which can read scene texts
    and perform reasoning on a knowledge graph to arrive at an accurate answer. 
    Our proposed model has three mutually interacting modules: (i) proposal module to get word
    and visual content proposals from the image, (ii) fusion
    module to fuse these proposals, question and knowledge
    base to mine relevant facts, and represent these facts as
    multi-relational graph, (iii) reasoning module to perform a
    novel gated graph neural network based reasoning on this
    graph.`,
    venue: 'International Conference On Computer Vision (ICCV), 2019',
    imgSrc: '/static/images/publications/tkvqa.png',
    pdfURL:
      'https://openaccess.thecvf.com/content_ICCV_2019/papers/Singh_From_Strings_to_Things_Knowledge-Enabled_VQA_Model_That_Can_Read_ICCV_2019_paper.pdf',
    websiteURL: 'https://textkvqa.github.io/',
    dataURL: 'https://textkvqa.github.io/',
    award: 'Oral',
    year: 2019,
  },
  {
    title: 'OCR-VQA: Visual Question Answering by Reading Text in Images',
    authors: 'Anand Mishra, Shashank Shekhar, Ajeet Kumar Singh, Anirban Chakraborty',
    abstract: `The problem of answering questions about an
    image is popularly known as visual question answering (or
    VQA in short). It is a well-established problem in computer
    vision. However, none of the VQA methods currently utilize the
    text often present in the image. These “texts in images” provide
    additional useful cues and facilitate better understanding of
    the visual content. In this paper, we introduce a novel task of
    visual question answering by reading text in images, i.e., by
    optical character recognition or OCR. We refer to this problem
    as OCR-VQA. To facilitate a systematic way of studying this
    new problem, we introduce a large-scale dataset, namely OCRVQA–200K. 
    This dataset comprises of 207,572 images of book
    covers and contains more than 1 million question-answer pairs
    about these images. We judiciously combine well-established
    techniques from OCR and VQA domains to present a novel
    baseline for OCR-VQA–200K. The experimental results and
    rigorous analysis demonstrate various challenges present in
    this dataset leaving ample scope for the future research. We are
    optimistic that this new task along with compiled dataset will
    open-up many exciting research avenues both for the document
    image analysis and the VQA communities.`,
    venue: 'International Conference on Document Analysis and Recognition (ICDAR), 2019',
    imgSrc: '/static/images/publications/ocr-vqa.png',
    pdfURL: 'https://anandmishra22.github.io/files/mishra-OCR-VQA.pdf',
    websiteURL: 'https://ocr-vqa.github.io/',
    dataURL: 'https://drive.google.com/drive/folders/1_GYPY5UkUy7HIcR0zq3ZCFgeZN7BAfm_?usp=sharing',
    year: 2019,
  },
  {
    title:
      'Road Damage Detection And Classification In Smartphone Captured Images Using Mask R-CNN',
    authors: 'Janpreet Singh, Shashank Shekhar',
    abstract: `Abstract not available.`,
    venue: 'arXiv',
    imgSrc: '/static/images/publications/mrcnn-road.png',
    arxivURL: 'https://arxiv.org/abs/1811.04535',
    pdfURL: 'https://arxiv.org/pdf/1811.04535',
    githubURL: 'https://github.com/sshkhr/BigDataCup18_Submission',
    year: 2018,
  },
]

export default publicationsData
