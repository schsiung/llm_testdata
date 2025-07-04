.. Copyright (C) 2001-2021 NLTK Project
.. For license information, see LICENSE.TXT

================
 Corpus Readers
================

The `nltk.corpus` package defines a collection of *corpus reader*
classes, which can be used to access the contents of a diverse set of
corpora.  The list of available corpora is given at:

http://www.nltk.org/nltk_data/

Each corpus reader class is specialized to handle a specific
corpus format.  In addition, the `nltk.corpus` package automatically
creates a set of corpus reader instances that can be used to access
the corpora in the NLTK data package.
Section `Corpus Reader Objects`_ ("Corpus Reader Objects") describes
the corpus reader instances that can be used to read the corpora in
the NLTK data package.  Section `Corpus Reader Classes`_ ("Corpus
Reader Classes") describes the corpus reader classes themselves, and
discusses the issues involved in creating new corpus reader objects
and new corpus reader classes.  Section `Regression Tests`_
("Regression Tests") contains regression tests for the corpus readers
and associated functions and classes.

.. contents:: **Table of Contents**
  :depth: 2
  :backlinks: none

---------------------
Corpus Reader Objects
---------------------

Overview
========

NLTK includes a diverse set of corpora which can be
read using the ``nltk.corpus`` package.  Each corpus is accessed by
means of a "corpus reader" object from ``nltk.corpus``:

    >>> import nltk.corpus
    >>> # The Brown corpus:
    >>> print(str(nltk.corpus.brown).replace('\\\\','/'))
    <CategorizedTaggedCorpusReader in '.../corpora/brown'...>
    >>> # The Penn Treebank Corpus:
    >>> print(str(nltk.corpus.treebank).replace('\\\\','/'))
    <BracketParseCorpusReader in '.../corpora/treebank/combined'...>
    >>> # The Name Genders Corpus:
    >>> print(str(nltk.corpus.names).replace('\\\\','/'))
    <WordListCorpusReader in '.../corpora/names'...>
    >>> # The Inaugural Address Corpus:
    >>> print(str(nltk.corpus.inaugural).replace('\\\\','/'))
    <PlaintextCorpusReader in '.../corpora/inaugural'...>

Most corpora consist of a set of files, each containing a document (or
other pieces of text).  A list of identifiers for these files is
accessed via the ``fileids()`` method of the corpus reader:

    >>> nltk.corpus.treebank.fileids()
    ['wsj_0001.mrg', 'wsj_0002.mrg', 'wsj_0003.mrg', 'wsj_0004.mrg', ...]
    >>> nltk.corpus.inaugural.fileids()
    ['1789-Washington.txt', '1793-Washington.txt', '1797-Adams.txt', ...]

Each corpus reader provides a variety of methods to read data from the
corpus, depending on the format of the corpus.  For example, plaintext
corpora support methods to read the corpus as raw text, a list of
words, a list of sentences, or a list of paragraphs.

    >>> from nltk.corpus import inaugural
    >>> inaugural.raw('1789-Washington.txt')
    'Fellow-Citizens of the Senate ...'
    >>> inaugural.words('1789-Washington.txt')
    ['Fellow', '-', 'Citizens', 'of', 'the', ...]
    >>> inaugural.sents('1789-Washington.txt')
    [['Fellow', '-', 'Citizens'...], ['Among', 'the', 'vicissitudes'...]...]
    >>> inaugural.paras('1789-Washington.txt')
    [[['Fellow', '-', 'Citizens'...]],
     [['Among', 'the', 'vicissitudes'...],
      ['On', 'the', 'one', 'hand', ',', 'I'...]...]...]

Each of these reader methods may be given a single document's item
name or a list of document item names.  When given a list of document
item names, the reader methods will concatenate together the contents
of the individual documents.

    >>> l1 = len(inaugural.words('1789-Washington.txt'))
    >>> l2 = len(inaugural.words('1793-Washington.txt'))
    >>> l3 = len(inaugural.words(['1789-Washington.txt', '1793-Washington.txt']))
    >>> print('%s+%s == %s' % (l1, l2, l3))
    1538+147 == 1685

If the reader methods are called without any arguments, they will
typically load all documents in the corpus.

    >>> len(inaugural.words())
    149797

If a corpus contains a README file, it can be accessed with a ``readme()`` method:

    >>> inaugural.readme()[:32]
    'C-Span Inaugural Address Corpus\n'

Plaintext Corpora
=================

Here are the first few words from each of NLTK's plaintext corpora:

    >>> nltk.corpus.abc.words()
    ['PM', 'denies', 'knowledge', 'of', 'AWB', ...]
    >>> nltk.corpus.genesis.words()
    ['In', 'the', 'beginning', 'God', 'created', ...]
    >>> nltk.corpus.gutenberg.words(fileids='austen-emma.txt')
    ['[', 'Emma', 'by', 'Jane', 'Austen', '1816', ...]
    >>> nltk.corpus.inaugural.words()
    ['Fellow', '-', 'Citizens', 'of', 'the', ...]
    >>> nltk.corpus.state_union.words()
    ['PRESIDENT', 'HARRY', 'S', '.', 'TRUMAN', "'", ...]
    >>> nltk.corpus.webtext.words()
    ['Cookie', 'Manager', ':', '"', 'Don', "'", 't', ...]

Tagged Corpora
==============

In addition to the plaintext corpora, NLTK's data package also
contains a wide variety of annotated corpora.  For example, the Brown
Corpus is annotated with part-of-speech tags, and defines additional
methods ``tagged_*()`` which words as `(word,tag)` tuples, rather
than just bare word strings.

    >>> from nltk.corpus import brown
    >>> print(brown.words())
    ['The', 'Fulton', 'County', 'Grand', 'Jury', ...]
    >>> print(brown.tagged_words())
    [('The', 'AT'), ('Fulton', 'NP-TL'), ...]
    >>> print(brown.sents())
    [['The', 'Fulton', 'County'...], ['The', 'jury', 'further'...], ...]
    >>> print(brown.tagged_sents())
    [[('The', 'AT'), ('Fulton', 'NP-TL')...],
     [('The', 'AT'), ('jury', 'NN'), ('further', 'RBR')...]...]
    >>> print(brown.paras(categories='reviews'))
    [[['It', 'is', 'not', 'news', 'that', 'Nathan', 'Milstein'...],
      ['Certainly', 'not', 'in', 'Orchestra', 'Hall', 'where'...]],
     [['There', 'was', 'about', 'that', 'song', 'something', ...],
      ['Not', 'the', 'noblest', 'performance', 'we', 'have', ...], ...], ...]
    >>> print(brown.tagged_paras(categories='reviews'))
    [[[('It', 'PPS'), ('is', 'BEZ'), ('not', '*'), ...],
      [('Certainly', 'RB'), ('not', '*'), ('in', 'IN'), ...]],
     [[('There', 'EX'), ('was', 'BEDZ'), ('about', 'IN'), ...],
      [('Not', '*'), ('the', 'AT'), ('noblest', 'JJT'), ...], ...], ...]

Similarly, the Indian Language POS-Tagged Corpus includes samples of
Indian text annotated with part-of-speech tags:

    >>> from nltk.corpus import indian
    >>> print(indian.words()) # doctest: +SKIP
    ['\xe0\xa6\xae\xe0\xa6\xb9\xe0\xa6\xbf\...',
     '\xe0\xa6\xb8\xe0\xa6\xa8\xe0\xa7\x8d\xe0...', ...]
    >>> print(indian.tagged_words()) # doctest: +SKIP
    [('\xe0\xa6\xae\xe0\xa6\xb9\xe0\xa6\xbf...', 'NN'),
     ('\xe0\xa6\xb8\xe0\xa6\xa8\xe0\xa7\x8d\xe0...', 'NN'), ...]

Several tagged corpora support access to a simplified, universal tagset, e.g. where all nouns
tags are collapsed to a single category ``NOUN``:

    >>> print(brown.tagged_sents(tagset='universal'))
    [[('The', 'DET'), ('Fulton', 'NOUN'), ('County', 'NOUN'), ('Grand', 'ADJ'), ('Jury', 'NOUN'), ...],
     [('The', 'DET'), ('jury', 'NOUN'), ('further', 'ADV'), ('said', 'VERB'), ('in', 'ADP'), ...]...]
    >>> from nltk.corpus import conll2000, switchboard
    >>> print(conll2000.tagged_words(tagset='universal'))
    [('Confidence', 'NOUN'), ('in', 'ADP'), ...]

Use ``nltk.app.pos_concordance()`` to access a GUI for searching tagged corpora.

Chunked Corpora
===============

The CoNLL corpora also provide chunk structures, which are encoded as
flat trees.  The CoNLL 2000 Corpus includes phrasal chunks; and the
CoNLL 2002 Corpus includes named entity chunks.

    >>> from nltk.corpus import conll2000, conll2002
    >>> print(conll2000.sents())
    [['Confidence', 'in', 'the', 'pound', 'is', 'widely', ...],
     ['Chancellor', 'of', 'the', 'Exchequer', ...], ...]
    >>> for tree in conll2000.chunked_sents()[:2]:
    ...     print(tree)
    (S
      (NP Confidence/NN)
      (PP in/IN)
      (NP the/DT pound/NN)
      (VP is/VBZ widely/RB expected/VBN to/TO take/VB)
      (NP another/DT sharp/JJ dive/NN)
      if/IN
      ...)
    (S
      Chancellor/NNP
      (PP of/IN)
      (NP the/DT Exchequer/NNP)
      ...)
    >>> print(conll2002.sents())
    [['Sao', 'Paulo', '(', 'Brasil', ')', ',', ...], ['-'], ...]
    >>> for tree in conll2002.chunked_sents()[:2]:
    ...     print(tree)
    (S
      (LOC Sao/NC Paulo/VMI)
      (/Fpa
      (LOC Brasil/NC)
      )/Fpt
      ...)
    (S -/Fg)

.. note:: Since the CONLL corpora do not contain paragraph break
   information, these readers do not support the ``para()`` method.)

.. warning:: if you call the conll corpora reader methods without any
   arguments, they will return the contents of the entire corpus,
   *including* the 'test' portions of the corpus.)

SemCor is a subset of the Brown corpus tagged with WordNet senses and
named entities. Both kinds of lexical items include multiword units,
which are encoded as chunks (senses and part-of-speech tags pertain
to the entire chunk).

    >>> from nltk.corpus import semcor
    >>> semcor.words()
    ['The', 'Fulton', 'County', 'Grand', 'Jury', ...]
    >>> semcor.chunks()
    [['The'], ['Fulton', 'County', 'Grand', 'Jury'], ...]
    >>> semcor.sents()
    [['The', 'Fulton', 'County', 'Grand', 'Jury', 'said', ...],
    ['The', 'jury', 'further', 'said', ...], ...]
    >>> semcor.chunk_sents()
    [[['The'], ['Fulton', 'County', 'Grand', 'Jury'], ['said'], ...
    ['.']], [['The'], ['jury'], ['further'], ['said'], ... ['.']], ...]
    >>> list(map(str, semcor.tagged_chunks(tag='both')[:3]))
    ['(DT The)', "(Lemma('group.n.01.group') (NE (NNP Fulton County Grand Jury)))", "(Lemma('state.v.01.say') (VB said))"]
    >>> [[str(c) for c in s] for s in semcor.tagged_sents(tag='both')[:2]]
    [['(DT The)', "(Lemma('group.n.01.group') (NE (NNP Fulton County Grand Jury)))", ...
     '(None .)'], ['(DT The)', ... '(None .)']]


The IEER corpus is another chunked corpus.  This corpus is unusual in
that each corpus item contains multiple documents.  (This reflects the
fact that each corpus file contains multiple documents.)  The IEER
corpus defines the `parsed_docs` method, which returns the documents
in a given item as `IEERDocument` objects:

    >>> from nltk.corpus import ieer
    >>> ieer.fileids()
    ['APW_19980314', 'APW_19980424', 'APW_19980429',
     'NYT_19980315', 'NYT_19980403', 'NYT_19980407']
    >>> docs = ieer.parsed_docs('APW_19980314')
    >>> print(docs[0])
    <IEERDocument APW19980314.0391: 'Kenyans protest tax hikes'>
    >>> print(docs[0].docno)
    APW19980314.0391
    >>> print(docs[0].doctype)
    NEWS STORY
    >>> print(docs[0].date_time)
    03/14/1998 10:36:00
    >>> print(docs[0].headline)
    (DOCUMENT Kenyans protest tax hikes)
    >>> print(docs[0].text)
    (DOCUMENT
      (LOCATION NAIROBI)
      ,
      (LOCATION Kenya)
      (
      (ORGANIZATION AP)
      )
      _
      (CARDINAL Thousands)
      of
      laborers,
      ...
      on
      (DATE Saturday)
      ...)

Parsed Corpora
==============

The Treebank corpora provide a syntactic parse for each sentence.  The
NLTK data package includes a 10% sample of the Penn Treebank (in
``treebank``), as well as the Sinica Treebank (in ``sinica_treebank``).

Reading the Penn Treebank (Wall Street Journal sample):

    >>> from nltk.corpus import treebank
    >>> print(treebank.fileids())
    ['wsj_0001.mrg', 'wsj_0002.mrg', 'wsj_0003.mrg', 'wsj_0004.mrg', ...]
    >>> print(treebank.words('wsj_0003.mrg'))
    ['A', 'form', 'of', 'asbestos', 'once', 'used', ...]
    >>> print(treebank.tagged_words('wsj_0003.mrg'))
    [('A', 'DT'), ('form', 'NN'), ('of', 'IN'), ...]
    >>> print(treebank.parsed_sents('wsj_0003.mrg')[0])
    (S
      (S-TPC-1
        (NP-SBJ
          (NP (NP (DT A) (NN form)) (PP (IN of) (NP (NN asbestos))))
          (RRC ...)...)...)
      ...
      (VP (VBD reported) (SBAR (-NONE- 0) (S (-NONE- *T*-1))))
      (. .))

If you have access to a full installation of the Penn Treebank, NLTK
can be configured to load it as well. Download the ``ptb`` package,
and in the directory ``nltk_data/corpora/ptb`` place the ``BROWN``
and ``WSJ`` directories of the Treebank installation (symlinks work
as well). Then use the ``ptb`` module instead of ``treebank``:

   >>> from nltk.corpus import ptb
   >>> print(ptb.fileids()) # doctest: +SKIP
   ['BROWN/CF/CF01.MRG', 'BROWN/CF/CF02.MRG', 'BROWN/CF/CF03.MRG', 'BROWN/CF/CF04.MRG', ...]
   >>> print(ptb.words('WSJ/00/WSJ_0003.MRG')) # doctest: +SKIP
   ['A', 'form', 'of', 'asbestos', 'once', 'used', '*', ...]
   >>> print(ptb.tagged_words('WSJ/00/WSJ_0003.MRG')) # doctest: +SKIP
   [('A', 'DT'), ('form', 'NN'), ('of', 'IN'), ...]

...and so forth, like ``treebank`` but with extended fileids. Categories
specified in ``allcats.txt`` can be used to filter by genre; they consist
of ``news`` (for WSJ articles) and names of the Brown subcategories
(``fiction``, ``humor``, ``romance``, etc.):

   >>> ptb.categories() # doctest: +SKIP
   ['adventure', 'belles_lettres', 'fiction', 'humor', 'lore', 'mystery', 'news', 'romance', 'science_fiction']
   >>> print(ptb.fileids('news')) # doctest: +SKIP
   ['WSJ/00/WSJ_0001.MRG', 'WSJ/00/WSJ_0002.MRG', 'WSJ/00/WSJ_0003.MRG', ...]
   >>> print(ptb.words(categories=['humor','fiction'])) # doctest: +SKIP
   ['Thirty-three', 'Scotty', 'did', 'not', 'go', 'back', ...]

As PropBank and NomBank depend on the (WSJ portion of the) Penn Treebank,
the modules ``propbank_ptb`` and ``nombank_ptb`` are provided for access
to a full PTB installation.

Reading the Sinica Treebank:

    >>> from nltk.corpus import sinica_treebank
    >>> print(sinica_treebank.sents()) # doctest: +SKIP
    [['\xe4\xb8\x80'], ['\xe5\x8f\x8b\xe6\x83\x85'], ...]
    >>> sinica_treebank.parsed_sents()[25] # doctest: +SKIP
    Tree('S',
        [Tree('NP',
            [Tree('Nba', ['\xe5\x98\x89\xe7\x8f\x8d'])]),
         Tree('V\xe2\x80\xa7\xe5\x9c\xb0',
            [Tree('VA11', ['\xe4\xb8\x8d\xe5\x81\x9c']),
             Tree('DE', ['\xe7\x9a\x84'])]),
         Tree('VA4', ['\xe5\x93\xad\xe6\xb3\xa3'])])

Reading the CoNLL 2007 Dependency Treebanks:

    >>> from nltk.corpus import conll2007
    >>> conll2007.sents('esp.train')[0] # doctest: +SKIP
    ['El', 'aumento', 'del', 'índice', 'de', 'desempleo', ...]
    >>> conll2007.parsed_sents('esp.train')[0] # doctest: +SKIP
    <DependencyGraph with 38 nodes>
    >>> print(conll2007.parsed_sents('esp.train')[0].tree()) # doctest: +SKIP
    (fortaleció
      (aumento El (del (índice (de (desempleo estadounidense)))))
      hoy
      considerablemente
      (al
        (euro
          (cotizaba
            ,
            que
            (a (15.35 las GMT))
            se
            (en (mercado el (de divisas) (de Fráncfort)))
            (a 0,9452_dólares)
            (frente_a , (0,9349_dólares los (de (mañana esta)))))))
      .)

Word Lists and Lexicons
=======================

The NLTK data package also includes a number of lexicons and word
lists.  These are accessed just like text corpora.  The following
examples illustrate the use of the wordlist corpora:

    >>> from nltk.corpus import names, stopwords, words
    >>> words.fileids()
    ['en', 'en-basic']
    >>> words.words('en')
    ['A', 'a', 'aa', 'aal', 'aalii', 'aam', 'Aani', 'aardvark', 'aardwolf', ...]

    >>> stopwords.fileids()
    ['arabic', 'azerbaijani', 'danish', 'dutch', 'english', 'finnish', 'french', ...]
    >>> sorted(stopwords.words('portuguese'))
    ['a', 'ao', 'aos', 'aquela', 'aquelas', 'aquele', 'aqueles', ...]
    >>> names.fileids()
    ['female.txt', 'male.txt']
    >>> names.words('male.txt')
    ['Aamir', 'Aaron', 'Abbey', 'Abbie', 'Abbot', 'Abbott', ...]
    >>> names.words('female.txt')
    ['Abagael', 'Abagail', 'Abbe', 'Abbey', 'Abbi', 'Abbie', ...]

The CMU Pronunciation Dictionary corpus contains pronunciation
transcriptions for over 100,000 words.  It can be accessed as a list
of entries (where each entry consists of a word, an identifier, and a
transcription) or as a dictionary from words to lists of
transcriptions.  Transcriptions are encoded as tuples of phoneme
strings.

    >>> from nltk.corpus import cmudict
    >>> print(cmudict.entries()[653:659])
    [('acetate', ['AE1', 'S', 'AH0', 'T', 'EY2', 'T']),
    ('acetic', ['AH0', 'S', 'EH1', 'T', 'IH0', 'K']),
    ('acetic', ['AH0', 'S', 'IY1', 'T', 'IH0', 'K']),
    ('aceto', ['AA0', 'S', 'EH1', 'T', 'OW0']),
    ('acetochlor', ['AA0', 'S', 'EH1', 'T', 'OW0', 'K', 'L', 'AO2', 'R']),
    ('acetone', ['AE1', 'S', 'AH0', 'T', 'OW2', 'N'])]
    >>> # Load the entire cmudict corpus into a Python dictionary:
    >>> transcr = cmudict.dict()
    >>> print([transcr[w][0] for w in 'Natural Language Tool Kit'.lower().split()])
    [['N', 'AE1', 'CH', 'ER0', 'AH0', 'L'],
     ['L', 'AE1', 'NG', 'G', 'W', 'AH0', 'JH'],
     ['T', 'UW1', 'L'],
     ['K', 'IH1', 'T']]


WordNet
=======

Please see the separate WordNet howto.

FrameNet
========

Please see the separate FrameNet howto.

PropBank
========

Please see the separate PropBank howto.

SentiWordNet
============

Please see the separate SentiWordNet howto.

Categorized Corpora
===================

Several corpora included with NLTK contain documents that have been categorized for
topic, genre, polarity, etc.  In addition to the standard corpus interface, these
corpora provide access to the list of categories and the mapping between the documents
and their categories (in both directions).  Access the categories using the ``categories()``
method, e.g.:

    >>> from nltk.corpus import brown, movie_reviews, reuters
    >>> brown.categories()
    ['adventure', 'belles_lettres', 'editorial', 'fiction', 'government', 'hobbies', 'humor',
    'learned', 'lore', 'mystery', 'news', 'religion', 'reviews', 'romance', 'science_fiction']
    >>> movie_reviews.categories()
    ['neg', 'pos']
    >>> reuters.categories()
    ['acq', 'alum', 'barley', 'bop', 'carcass', 'castor-oil', 'cocoa',
    'coconut', 'coconut-oil', 'coffee', 'copper', 'copra-cake', 'corn',
    'cotton', 'cotton-oil', 'cpi', 'cpu', 'crude', 'dfl', 'dlr', ...]

This method has an optional argument that specifies a document or a list
of documents, allowing us to map from (one or more) documents to (one or more) categories:

    >>> brown.categories('ca01')
    ['news']
    >>> brown.categories(['ca01','cb01'])
    ['editorial', 'news']
    >>> reuters.categories('training/9865')
    ['barley', 'corn', 'grain', 'wheat']
    >>> reuters.categories(['training/9865', 'training/9880'])
    ['barley', 'corn', 'grain', 'money-fx', 'wheat']

We can go back the other way using the optional argument of the ``fileids()`` method:

    >>> reuters.fileids('barley')
    ['test/15618', 'test/15649', 'test/15676', 'test/15728', 'test/15871', ...]

Both the ``categories()`` and ``fileids()`` methods return a sorted list containing
no duplicates.

In addition to mapping between categories and documents, these corpora permit
direct access to their contents via the categories.  Instead of accessing a subset
of a corpus by specifying one or more fileids, we can identify one or more categories, e.g.:

    >>> brown.tagged_words(categories='news')
    [('The', 'AT'), ('Fulton', 'NP-TL'), ...]
    >>> brown.sents(categories=['editorial','reviews'])
    [['Assembly', 'session', 'brought', 'much', 'good'], ['The', 'General',
    'Assembly', ',', 'which', 'adjourns', 'today', ',', 'has', 'performed',
    'in', 'an', 'atmosphere', 'of', 'crisis', 'and', 'struggle', 'from',
    'the', 'day', 'it', 'convened', '.'], ...]

Note that it is an error to specify both documents and categories.

In the context of a text categorization system, we can easily test if the
category assigned to a document is correct as follows:

    >>> def classify(doc): return 'news'   # Trivial classifier
    >>> doc = 'ca01'
    >>> classify(doc) in brown.categories(doc)
    True


Other Corpora
=============

comparative_sentences
---------------------
A list of sentences from various sources, especially reviews and articles. Each
line contains one sentence; sentences were separated by using a sentence tokenizer.
Comparative sentences have been annotated with their type, entities, features and
keywords.

    >>> from nltk.corpus import comparative_sentences
    >>> comparison = comparative_sentences.comparisons()[0]
    >>> comparison.text
    ['its', 'fast-forward', 'and', 'rewind', 'work', 'much', 'more', 'smoothly',
    'and', 'consistently', 'than', 'those', 'of', 'other', 'models', 'i', "'ve",
    'had', '.']
    >>> comparison.entity_2
    'models'
    >>> (comparison.feature, comparison.keyword)
    ('rewind', 'more')
    >>> len(comparative_sentences.comparisons())
    853

opinion_lexicon
---------------
A list of positive and negative opinion words or sentiment words for English.

    >>> from nltk.corpus import opinion_lexicon
    >>> opinion_lexicon.words()[:4]
        ['2-faced', '2-faces', 'abnormal', 'abolish']

The OpinionLexiconCorpusReader also provides shortcuts to retrieve positive/negative
words:

    >>> opinion_lexicon.negative()[:4]
    ['2-faced', '2-faces', 'abnormal', 'abolish']

Note that words from `words()` method in opinion_lexicon are sorted by file id,
not alphabetically:

    >>> opinion_lexicon.words()[0:10]
    ['2-faced', '2-faces', 'abnormal', 'abolish', 'abominable', 'abominably',
    'abominate', 'abomination', 'abort', 'aborted']
    >>> sorted(opinion_lexicon.words())[0:10]
    ['2-faced', '2-faces', 'a+', 'abnormal', 'abolish', 'abominable', 'abominably',
    'abominate', 'abomination', 'abort']

ppattach
--------
The Prepositional Phrase Attachment corpus is a corpus of
prepositional phrase attachment decisions.  Each instance in the
corpus is encoded as a ``PPAttachment`` object:

    >>> from nltk.corpus import ppattach
    >>> ppattach.attachments('training')
    [PPAttachment(sent='0', verb='join', noun1='board',
                  prep='as', noun2='director', attachment='V'),
     PPAttachment(sent='1', verb='is', noun1='chairman',
                  prep='of', noun2='N.V.', attachment='N'),
     ...]
    >>> inst = ppattach.attachments('training')[0]
    >>> (inst.sent, inst.verb, inst.noun1, inst.prep, inst.noun2)
    ('0', 'join', 'board', 'as', 'director')
    >>> inst.attachment
    'V'

product_reviews_1 and product_reviews_2
---------------------------------------
These two datasets respectively contain annotated customer reviews of 5 and 9
products from amazon.com.

    >>> from nltk.corpus import product_reviews_1
    >>> camera_reviews = product_reviews_1.reviews('Canon_G3.txt')
    >>> review = camera_reviews[0]
    >>> review.sents()[0]
    ['i', 'recently', 'purchased', 'the', 'canon', 'powershot', 'g3', 'and', 'am',
    'extremely', 'satisfied', 'with', 'the', 'purchase', '.']
    >>> review.features()
    [('canon powershot g3', '+3'), ('use', '+2'), ('picture', '+2'),
    ('picture quality', '+1'), ('picture quality', '+1'), ('camera', '+2'),
    ('use', '+2'), ('feature', '+1'), ('picture quality', '+3'), ('use', '+1'),
    ('option', '+1')]

It is also possible to reach the same information directly from the stream:

    >>> product_reviews_1.features('Canon_G3.txt')
    [('canon powershot g3', '+3'), ('use', '+2'), ...]

We can compute stats for specific product features:

    >>> n_reviews = len([(feat,score) for (feat,score) in product_reviews_1.features('Canon_G3.txt') if feat=='picture'])
    >>> tot = sum([int(score) for (feat,score) in product_reviews_1.features('Canon_G3.txt') if feat=='picture'])
    >>> mean = tot / n_reviews
    >>> print(n_reviews, tot, mean)
    15 24 1.6

pros_cons
---------
A list of pros/cons sentences for determining context (aspect) dependent
sentiment words, which are then applied to sentiment analysis of comparative
sentences.

    >>> from nltk.corpus import pros_cons
    >>> pros_cons.sents(categories='Cons')
    [['East', 'batteries', '!', 'On', '-', 'off', 'switch', 'too', 'easy',
    'to', 'maneuver', '.'], ['Eats', '...', 'no', ',', 'GULPS', 'batteries'],
    ...]
    >>> pros_cons.words('IntegratedPros.txt')
    ['Easy', 'to', 'use', ',', 'economical', '!', ...]

semcor
------
The Brown Corpus, annotated with WordNet senses.

    >>> from nltk.corpus import semcor
    >>> semcor.words('brown2/tagfiles/br-n12.xml')
    ['When', 'several', 'minutes', 'had', 'passed', ...]

senseval
--------
The Senseval 2 corpus is a word sense disambiguation corpus.  Each
item in the corpus corresponds to a single ambiguous word.  For each
of these words, the corpus contains a list of instances, corresponding
to occurrences of that word.  Each instance provides the word; a list
of word senses that apply to the word occurrence; and the word's
context.

    >>> from nltk.corpus import senseval
    >>> senseval.fileids()
    ['hard.pos', 'interest.pos', 'line.pos', 'serve.pos']
    >>> senseval.instances('hard.pos')
    ...
    [SensevalInstance(word='hard-a',
        position=20,
        context=[('``', '``'), ('he', 'PRP'), ...('hard', 'JJ'), ...],
        senses=('HARD1',)),
     SensevalInstance(word='hard-a',
        position=10,
        context=[('clever', 'NNP'), ...('hard', 'JJ'), ('time', 'NN'), ...],
        senses=('HARD1',)), ...]

The following code looks at instances of the word 'interest', and
displays their local context (2 words on each side) and word sense(s):

    >>> for inst in senseval.instances('interest.pos')[:10]:
    ...     p = inst.position
    ...     left = ' '.join(w for (w,t) in inst.context[p-2:p])
    ...     word = ' '.join(w for (w,t) in inst.context[p:p+1])
    ...     right = ' '.join(w for (w,t) in inst.context[p+1:p+3])
    ...     senses = ' '.join(inst.senses)
    ...     print('%20s |%10s | %-15s -> %s' % (left, word, right, senses))
             declines in |  interest | rates .         -> interest_6
      indicate declining |  interest | rates because   -> interest_6
           in short-term |  interest | rates .         -> interest_6
                     4 % |  interest | in this         -> interest_5
            company with | interests | in the          -> interest_5
                  , plus |  interest | .               -> interest_6
                 set the |  interest | rate on         -> interest_6
                  's own |  interest | , prompted      -> interest_4
           principal and |  interest | is the          -> interest_6
            increase its |  interest | to 70           -> interest_5

sentence_polarity
-----------------
The Sentence Polarity dataset contains 5331 positive and 5331 negative processed
sentences.

    >>> from nltk.corpus import sentence_polarity
    >>> sentence_polarity.sents()
    [['simplistic', ',', 'silly', 'and', 'tedious', '.'], ["it's", 'so', 'laddish',
    'and', 'juvenile', ',', 'only', 'teenage', 'boys', 'could', 'possibly', 'find',
    'it', 'funny', '.'], ...]
    >>> sentence_polarity.categories()
    ['neg', 'pos']
    >>> sentence_polarity.sents()[1]
    ["it's", 'so', 'laddish', 'and', 'juvenile', ',', 'only', 'teenage', 'boys',
    'could', 'possibly', 'find', 'it', 'funny', '.']

shakespeare
-----------
The Shakespeare corpus contains a set of Shakespeare plays, formatted
as XML files.  These corpora are returned as ElementTree objects:

    >>> from nltk.corpus import shakespeare
    >>> from xml.etree import ElementTree
    >>> shakespeare.fileids()
    ['a_and_c.xml', 'dream.xml', 'hamlet.xml', 'j_caesar.xml', ...]
    >>> play = shakespeare.xml('dream.xml')
    >>> print(play)
    <Element 'PLAY' at ...>
    >>> print('%s: %s' % (play[0].tag, play[0].text))
    TITLE: A Midsummer Night's Dream
    >>> personae = [persona.text for persona in
    ...             play.findall('PERSONAE/PERSONA')]
    >>> print(personae)
    ['THESEUS, Duke of Athens.', 'EGEUS, father to Hermia.', ...]
    >>> # Find and print speakers not listed as personae
    >>> names = [persona.split(',')[0] for persona in personae]
    >>> speakers = set(speaker.text for speaker in
    ...                play.findall('*/*/*/SPEAKER'))
    >>> print(sorted(speakers.difference(names)))
    ['ALL', 'COBWEB', 'DEMETRIUS', 'Fairy', 'HERNIA', 'LYSANDER',
     'Lion', 'MOTH', 'MUSTARDSEED', 'Moonshine', 'PEASEBLOSSOM',
     'Prologue', 'Pyramus', 'Thisbe', 'Wall']

subjectivity
-----------
The Subjectivity Dataset contains 5000 subjective and 5000 objective processed
sentences.

    >>> from nltk.corpus import subjectivity
    >>> subjectivity.categories()
    ['obj', 'subj']
    >>> subjectivity.sents()[23]
    ['television', 'made', 'him', 'famous', ',', 'but', 'his', 'biggest', 'hits',
    'happened', 'off', 'screen', '.']
    >>> subjectivity.words(categories='subj')
    ['smart', 'and', 'alert', ',', 'thirteen', ...]

toolbox
-------
The Toolbox corpus distributed with NLTK contains a sample lexicon and
several sample texts from the Rotokas language.  The Toolbox corpus
reader returns Toolbox files as XML ElementTree objects.  The
following example loads the Rotokas dictionary, and figures out the
distribution of part-of-speech tags for reduplicated words.

.. doctest: +SKIP

    >>> from nltk.corpus import toolbox
    >>> from nltk.probability import FreqDist
    >>> from xml.etree import ElementTree
    >>> import re
    >>> rotokas = toolbox.xml('rotokas.dic')
    >>> redup_pos_freqdist = FreqDist()
    >>> # Note: we skip over the first record, which is actually
    >>> # the header.
    >>> for record in rotokas[1:]:
    ...     lexeme = record.find('lx').text
    ...     if re.match(r'(.*)\1$', lexeme):
    ...         redup_pos_freqdist[record.find('ps').text] += 1
    >>> for item, count in redup_pos_freqdist.most_common():
    ...     print(item, count)
    V 41
    N 14
    ??? 4

This example displays some records from a Rotokas text:

.. doctest: +SKIP

    >>> river = toolbox.xml('rotokas/river.txt', key='ref')
    >>> for record in river.findall('record')[:3]:
    ...     for piece in record:
    ...         if len(piece.text) > 60:
    ...             print('%-6s %s...' % (piece.tag, piece.text[:57]))
    ...         else:
    ...             print('%-6s %s' % (piece.tag, piece.text))
    ref    Paragraph 1
    t      ``Viapau oisio              ra   ovaupasi                ...
    m      viapau   oisio              ra   ovau   -pa       -si    ...
    g      NEG      this way/like this and  forget -PROG     -2/3.DL...
    p      NEG      ???                CONJ V.I    -SUFF.V.3 -SUFF.V...
    f      ``No ken lus tingting wanema samting papa i bin tok,'' Na...
    fe     ``Don't forget what Dad said,'' yelled Naomi.
    ref    2
    t      Osa     Ira  ora  Reviti viapau uvupasiva.
    m      osa     Ira  ora  Reviti viapau uvu        -pa       -si ...
    g      as/like name and  name   NEG    hear/smell -PROG     -2/3...
    p      CONJ    N.PN CONJ N.PN   NEG    V.T        -SUFF.V.3 -SUF...
    f      Tasol Ila na David no bin harim toktok.
    fe     But Ila and David took no notice.
    ref    3
    t      Ikaupaoro                     rokosiva                   ...
    m      ikau      -pa       -oro      roko    -si       -va      ...
    g      run/hurry -PROG     -SIM      go down -2/3.DL.M -RP      ...
    p      V.T       -SUFF.V.3 -SUFF.V.4 ADV     -SUFF.V.4 -SUFF.VT....
    f      Tupela i bin hariap i go long wara .
    fe     They raced to the river.

timit
-----
The NLTK data package includes a fragment of the TIMIT
Acoustic-Phonetic Continuous Speech Corpus.  This corpus is broken
down into small speech samples, each of which is available as a wave
file, a phonetic transcription, and a tokenized word list.

    >>> from nltk.corpus import timit
    >>> print(timit.utteranceids())
    ['dr1-fvmh0/sa1', 'dr1-fvmh0/sa2', 'dr1-fvmh0/si1466',
    'dr1-fvmh0/si2096', 'dr1-fvmh0/si836', 'dr1-fvmh0/sx116',
    'dr1-fvmh0/sx206', 'dr1-fvmh0/sx26', 'dr1-fvmh0/sx296', ...]

    >>> item = timit.utteranceids()[5]
    >>> print(timit.phones(item))
    ['h#', 'k', 'l', 'ae', 's', 'pcl', 'p', 'dh', 'ax',
     's', 'kcl', 'k', 'r', 'ux', 'ix', 'nx', 'y', 'ax',
     'l', 'eh', 'f', 'tcl', 't', 'hh', 'ae', 'n', 'dcl',
     'd', 'h#']
    >>> print(timit.words(item))
    ['clasp', 'the', 'screw', 'in', 'your', 'left', 'hand']
    >>> timit.play(item) # doctest: +SKIP

The corpus reader can combine the word segmentation information with
the phonemes to produce a single tree structure:

    >>> for tree in timit.phone_trees(item):
    ...     print(tree)
    (S
      h#
      (clasp k l ae s pcl p)
      (the dh ax)
      (screw s kcl k r ux)
      (in ix nx)
      (your y ax)
      (left l eh f tcl t)
      (hand hh ae n dcl d)
      h#)

The start time and stop time of each phoneme, word, and sentence are
also available:

    >>> print(timit.phone_times(item))
    [('h#', 0, 2190), ('k', 2190, 3430), ('l', 3430, 4326), ...]
    >>> print(timit.word_times(item))
    [('clasp', 2190, 8804), ('the', 8804, 9734), ...]
    >>> print(timit.sent_times(item))
    [('Clasp the screw in your left hand.', 0, 32154)]

We can use these times to play selected pieces of a speech sample:

    >>> timit.play(item, 2190, 8804) # 'clasp'  # doctest: +SKIP

The corpus reader can also be queried for information about the
speaker and sentence identifier for a given speech sample:

    >>> print(timit.spkrid(item))
    dr1-fvmh0
    >>> print(timit.sentid(item))
    sx116
    >>> print(timit.spkrinfo(timit.spkrid(item)))
    SpeakerInfo(id='VMH0',
                sex='F',
                dr='1',
                use='TRN',
                recdate='03/11/86',
                birthdate='01/08/60',
                ht='5\'05"',
                race='WHT',
                edu='BS',
                comments='BEST NEW ENGLAND ACCENT SO FAR')

    >>> # List the speech samples from the same speaker:
    >>> timit.utteranceids(spkrid=timit.spkrid(item))
    ['dr1-fvmh0/sa1', 'dr1-fvmh0/sa2', 'dr1-fvmh0/si1466', ...]

twitter_samples
---------------

Twitter is well-known microblog service that allows public data to be
collected via APIs. NLTK's twitter corpus currently contains a sample of 20k Tweets
retrieved from the Twitter Streaming API.

    >>> from nltk.corpus import twitter_samples
    >>> twitter_samples.fileids()
    ['negative_tweets.json', 'positive_tweets.json', 'tweets.20150430-223406.json']

We follow standard practice in storing full Tweets as line-separated
JSON. These data structures can be accessed via `tweets.docs()`. However, in general it
is more practical to focus just on the text field of the Tweets, which
are accessed via the `strings()` method.

    >>> twitter_samples.strings('tweets.20150430-223406.json')[:5]
    ['RT @KirkKus: Indirect cost of the UK being in the EU is estimated to be costing Britain \xa3170 billion per year! #BetterOffOut #UKIP', ...]

The default tokenizer for Tweets is specialised for 'casual' text, and
the `tokenized()` method returns a list of lists of tokens.

    >>> twitter_samples.tokenized('tweets.20150430-223406.json')[:5]
    [['RT', '@KirkKus', ':', 'Indirect', 'cost', 'of', 'the', 'UK', 'being', 'in', ...],
     ['VIDEO', ':', 'Sturgeon', 'on', 'post-election', 'deals', 'http://t.co/BTJwrpbmOY'], ...]

rte
---
The RTE (Recognizing Textual Entailment) corpus was derived from the
RTE1, RTE2 and RTE3 datasets (dev and test data), and consists of a
list of XML-formatted 'text'/'hypothesis' pairs.

    >>> from nltk.corpus import rte
    >>> print(rte.fileids())
    ['rte1_dev.xml', 'rte1_test.xml', 'rte2_dev.xml', ..., 'rte3_test.xml']
    >>> rtepairs = rte.pairs(['rte2_test.xml', 'rte3_test.xml'])
    >>> print(rtepairs)
    [<RTEPair: gid=2-8>, <RTEPair: gid=2-9>, <RTEPair: gid=2-15>, ...]

In the gold standard test sets, each pair is labeled according to
whether or not the text 'entails' the hypothesis; the
entailment value is mapped to an integer 1 (True) or 0 (False).

    >>> rtepairs[5]
    <RTEPair: gid=2-23>
    >>> rtepairs[5].text
    'His wife Strida won a seat in parliament after forging an alliance
    with the main anti-Syrian coalition in the recent election.'
    >>> rtepairs[5].hyp
    'Strida elected to parliament.'
    >>> rtepairs[5].value
    1

The RTE corpus also supports an ``xml()`` method which produces ElementTrees.

    >>> xmltree = rte.xml('rte3_dev.xml')
    >>> xmltree # doctest: +SKIP
    <Element entailment-corpus at ...>
    >>> xmltree[7].findtext('t')
    "Mrs. Bush's approval ratings have remained very high, above 80%,
    even as her husband's have recently dropped below 50%."

verbnet
-------
The VerbNet corpus is a lexicon that divides verbs into classes, based
on their syntax-semantics linking behavior.  The basic elements in the
lexicon are verb lemmas, such as 'abandon' and 'accept', and verb
classes, which have identifiers such as 'remove-10.1' and
'admire-31.2-1'.  These class identifiers consist of a representative
verb selected from the class, followed by a numerical identifier.  The
list of verb lemmas, and the list of class identifiers, can be
retrieved with the following methods:

    >>> from nltk.corpus import verbnet
    >>> verbnet.lemmas()[20:25]
    ['accelerate', 'accept', 'acclaim', 'accompany', 'accrue']
    >>> verbnet.classids()[:5]
    ['accompany-51.7', 'admire-31.2', 'admire-31.2-1', 'admit-65', 'adopt-93']

The `classids()` method may also be used to retrieve the classes that
a given lemma belongs to:

    >>> verbnet.classids('accept')
    ['approve-77', 'characterize-29.2-1-1', 'obtain-13.5.2']

The `classids()` method may additionally be used to retrieve all classes
within verbnet if nothing is passed:

    >>> verbnet.classids()
    ['accompany-51.7', 'admire-31.2', 'admire-31.2-1', 'admit-65', 'adopt-93', 'advise-37.9', 'advise-37.9-1', 'allow-64', 'amalgamate-22.2', 'amalgamate-22.2-1', 'amalgamate-22.2-1-1', 'amalgamate-22.2-2', 'amalgamate-22.2-2-1', 'amalgamate-22.2-3', 'amalgamate-22.2-3-1', 'amalgamate-22.2-3-1-1', 'amalgamate-22.2-3-2', 'amuse-31.1', 'animal_sounds-38', 'appeal-31.4', 'appeal-31.4-1', 'appeal-31.4-2', 'appeal-31.4-3', 'appear-48.1.1', 'appoint-29.1', 'approve-77', 'assessment-34', 'assuming_position-50', 'avoid-52', 'banish-10.2', 'battle-36.4', 'battle-36.4-1', 'begin-55.1', 'begin-55.1-1', 'being_dressed-41.3.3', 'bend-45.2', 'berry-13.7', 'bill-54.5', 'body_internal_motion-49', 'body_internal_states-40.6', 'braid-41.2.2', 'break-45.1', 'breathe-40.1.2', 'breathe-40.1.2-1', 'bring-11.3', 'bring-11.3-1', 'build-26.1', 'build-26.1-1', 'bulge-47.5.3', 'bump-18.4', 'bump-18.4-1', 'butter-9.9', 'calibratable_cos-45.6', 'calibratable_cos-45.6-1', 'calve-28', 'captain-29.8', 'captain-29.8-1', 'captain-29.8-1-1', 'care-88', 'care-88-1', 'carry-11.4', 'carry-11.4-1', 'carry-11.4-1-1', 'carve-21.2', 'carve-21.2-1', 'carve-21.2-2', 'change_bodily_state-40.8.4', 'characterize-29.2', 'characterize-29.2-1', 'characterize-29.2-1-1', 'characterize-29.2-1-2', 'chase-51.6', 'cheat-10.6', 'cheat-10.6-1', 'cheat-10.6-1-1', 'chew-39.2', 'chew-39.2-1', 'chew-39.2-2', 'chit_chat-37.6', 'clear-10.3', 'clear-10.3-1', 'cling-22.5', 'coil-9.6', 'coil-9.6-1', 'coloring-24', 'complain-37.8', 'complete-55.2', 'concealment-16', 'concealment-16-1', 'confess-37.10', 'confine-92', 'confine-92-1', 'conjecture-29.5', 'conjecture-29.5-1', 'conjecture-29.5-2', 'consider-29.9', 'consider-29.9-1', 'consider-29.9-1-1', 'consider-29.9-1-1-1', 'consider-29.9-2', 'conspire-71', 'consume-66', 'consume-66-1', 'contiguous_location-47.8', 'contiguous_location-47.8-1', 'contiguous_location-47.8-2', 'continue-55.3', 'contribute-13.2', 'contribute-13.2-1', 'contribute-13.2-1-1', 'contribute-13.2-1-1-1', 'contribute-13.2-2', 'contribute-13.2-2-1', 'convert-26.6.2', 'convert-26.6.2-1', 'cooking-45.3', 'cooperate-73', 'cooperate-73-1', 'cooperate-73-2', 'cooperate-73-3', 'cope-83', 'cope-83-1', 'cope-83-1-1', 'correlate-86', 'correspond-36.1', 'correspond-36.1-1', 'correspond-36.1-1-1', 'cost-54.2', 'crane-40.3.2', 'create-26.4', 'create-26.4-1', 'curtsey-40.3.3', 'cut-21.1', 'cut-21.1-1', 'debone-10.8', 'declare-29.4', 'declare-29.4-1', 'declare-29.4-1-1', 'declare-29.4-1-1-1', 'declare-29.4-1-1-2', 'declare-29.4-1-1-3', 'declare-29.4-2', 'dedicate-79', 'defend-85', 'destroy-44', 'devour-39.4', 'devour-39.4-1', 'devour-39.4-2', 'differ-23.4', 'dine-39.5', 'disappearance-48.2', 'disassemble-23.3', 'discover-84', 'discover-84-1', 'discover-84-1-1', 'dress-41.1.1', 'dressing_well-41.3.2', 'drive-11.5', 'drive-11.5-1', 'dub-29.3', 'dub-29.3-1', 'eat-39.1', 'eat-39.1-1', 'eat-39.1-2', 'enforce-63', 'engender-27', 'entity_specific_cos-45.5', 'entity_specific_modes_being-47.2', 'equip-13.4.2', 'equip-13.4.2-1', 'equip-13.4.2-1-1', 'escape-51.1', 'escape-51.1-1', 'escape-51.1-2', 'escape-51.1-2-1', 'exceed-90', 'exchange-13.6', 'exchange-13.6-1', 'exchange-13.6-1-1', 'exhale-40.1.3', 'exhale-40.1.3-1', 'exhale-40.1.3-2', 'exist-47.1', 'exist-47.1-1', 'exist-47.1-1-1', 'feeding-39.7', 'ferret-35.6', 'fill-9.8', 'fill-9.8-1', 'fit-54.3', 'flinch-40.5', 'floss-41.2.1', 'focus-87', 'forbid-67', 'force-59', 'force-59-1', 'free-80', 'free-80-1', 'fulfilling-13.4.1', 'fulfilling-13.4.1-1', 'fulfilling-13.4.1-2', 'funnel-9.3', 'funnel-9.3-1', 'funnel-9.3-2', 'funnel-9.3-2-1', 'future_having-13.3', 'get-13.5.1', 'get-13.5.1-1', 'give-13.1', 'give-13.1-1', 'gobble-39.3', 'gobble-39.3-1', 'gobble-39.3-2', 'gorge-39.6', 'groom-41.1.2', 'grow-26.2', 'help-72', 'help-72-1', 'herd-47.5.2', 'hiccup-40.1.1', 'hit-18.1', 'hit-18.1-1', 'hold-15.1', 'hold-15.1-1', 'hunt-35.1', 'hurt-40.8.3', 'hurt-40.8.3-1', 'hurt-40.8.3-1-1', 'hurt-40.8.3-2', 'illustrate-25.3', 'image_impression-25.1', 'indicate-78', 'indicate-78-1', 'indicate-78-1-1', 'inquire-37.1.2', 'instr_communication-37.4', 'investigate-35.4', 'judgement-33', 'keep-15.2', 'knead-26.5', 'learn-14', 'learn-14-1', 'learn-14-2', 'learn-14-2-1', 'leave-51.2', 'leave-51.2-1', 'lecture-37.11', 'lecture-37.11-1', 'lecture-37.11-1-1', 'lecture-37.11-2', 'light_emission-43.1', 'limit-76', 'linger-53.1', 'linger-53.1-1', 'lodge-46', 'long-32.2', 'long-32.2-1', 'long-32.2-2', 'manner_speaking-37.3', 'marry-36.2', 'marvel-31.3', 'marvel-31.3-1', 'marvel-31.3-2', 'marvel-31.3-3', 'marvel-31.3-4', 'marvel-31.3-5', 'marvel-31.3-6', 'marvel-31.3-7', 'marvel-31.3-8', 'marvel-31.3-9', 'masquerade-29.6', 'masquerade-29.6-1', 'masquerade-29.6-2', 'matter-91', 'meander-47.7', 'meet-36.3', 'meet-36.3-1', 'meet-36.3-2', 'mine-10.9', 'mix-22.1', 'mix-22.1-1', 'mix-22.1-1-1', 'mix-22.1-2', 'mix-22.1-2-1', 'modes_of_being_with_motion-47.3', 'murder-42.1', 'murder-42.1-1', 'neglect-75', 'neglect-75-1', 'neglect-75-1-1', 'neglect-75-2', 'nonvehicle-51.4.2', 'nonverbal_expression-40.2', 'obtain-13.5.2', 'obtain-13.5.2-1', 'occurrence-48.3', 'order-60', 'order-60-1', 'orphan-29.7', 'other_cos-45.4', 'pain-40.8.1', 'pay-68', 'peer-30.3', 'pelt-17.2', 'performance-26.7', 'performance-26.7-1', 'performance-26.7-1-1', 'performance-26.7-2', 'performance-26.7-2-1', 'pit-10.7', 'pocket-9.10', 'pocket-9.10-1', 'poison-42.2', 'poke-19', 'pour-9.5', 'preparing-26.3', 'preparing-26.3-1', 'preparing-26.3-2', 'price-54.4', 'push-12', 'push-12-1', 'push-12-1-1', 'put-9.1', 'put-9.1-1', 'put-9.1-2', 'put_direction-9.4', 'put_spatial-9.2', 'put_spatial-9.2-1', 'reach-51.8', 'reflexive_appearance-48.1.2', 'refrain-69', 'register-54.1', 'rely-70', 'remove-10.1', 'risk-94', 'risk-94-1', 'roll-51.3.1', 'rummage-35.5', 'run-51.3.2', 'rush-53.2', 'say-37.7', 'say-37.7-1', 'say-37.7-1-1', 'say-37.7-2', 'scribble-25.2', 'search-35.2', 'see-30.1', 'see-30.1-1', 'see-30.1-1-1', 'send-11.1', 'send-11.1-1', 'separate-23.1', 'separate-23.1-1', 'separate-23.1-2', 'settle-89', 'shake-22.3', 'shake-22.3-1', 'shake-22.3-1-1', 'shake-22.3-2', 'shake-22.3-2-1', 'sight-30.2', 'simple_dressing-41.3.1', 'slide-11.2', 'slide-11.2-1-1', 'smell_emission-43.3', 'snooze-40.4', 'sound_emission-43.2', 'sound_existence-47.4', 'spank-18.3', 'spatial_configuration-47.6', 'split-23.2', 'spray-9.7', 'spray-9.7-1', 'spray-9.7-1-1', 'spray-9.7-2', 'stalk-35.3', 'steal-10.5', 'stimulus_subject-30.4', 'stop-55.4', 'stop-55.4-1', 'substance_emission-43.4', 'succeed-74', 'succeed-74-1', 'succeed-74-1-1', 'succeed-74-2', 'suffocate-40.7', 'suspect-81', 'swarm-47.5.1', 'swarm-47.5.1-1', 'swarm-47.5.1-2', 'swarm-47.5.1-2-1', 'swat-18.2', 'talk-37.5', 'tape-22.4', 'tape-22.4-1', 'tell-37.2', 'throw-17.1', 'throw-17.1-1', 'throw-17.1-1-1', 'tingle-40.8.2', 'touch-20', 'touch-20-1', 'transcribe-25.4', 'transfer_mesg-37.1.1', 'transfer_mesg-37.1.1-1', 'transfer_mesg-37.1.1-1-1', 'try-61', 'turn-26.6.1', 'turn-26.6.1-1', 'urge-58', 'vehicle-51.4.1', 'vehicle-51.4.1-1', 'waltz-51.5', 'want-32.1', 'want-32.1-1', 'want-32.1-1-1', 'weather-57', 'weekend-56', 'wink-40.3.1', 'wink-40.3.1-1', 'wipe_instr-10.4.2', 'wipe_instr-10.4.2-1', 'wipe_manner-10.4.1', 'wipe_manner-10.4.1-1', 'wish-62', 'withdraw-82', 'withdraw-82-1', 'withdraw-82-2', 'withdraw-82-3']

The primary object in the lexicon is a class record, which is stored
as an ElementTree xml object.  The class record for a given class
identifier is returned by the `vnclass()` method:

    >>> verbnet.vnclass('remove-10.1')
    <Element 'VNCLASS' at ...>

The `vnclass()` method also accepts "short" identifiers, such as '10.1':

    >>> verbnet.vnclass('10.1')
    <Element 'VNCLASS' at ...>

See the Verbnet documentation, or the Verbnet files, for information
about the structure of this xml.  As an example, we can retrieve a
list of thematic roles for a given Verbnet class:

    >>> vn_31_2 = verbnet.vnclass('admire-31.2')
    >>> for themrole in vn_31_2.findall('THEMROLES/THEMROLE'):
    ...     print(themrole.attrib['type'], end=' ')
    ...     for selrestr in themrole.findall('SELRESTRS/SELRESTR'):
    ...         print('[%(Value)s%(type)s]' % selrestr.attrib, end=' ')
    ...     print()
    Theme
    Experiencer [+animate]
    Predicate

The Verbnet corpus also provides a variety of pretty printing
functions that can be used to display the xml contents in a more
concise form.  The simplest such method is `pprint()`:

    >>> print(verbnet.pprint('57'))
    weather-57
      Subclasses: (none)
      Members: blow clear drizzle fog freeze gust hail howl lightning mist
        mizzle pelt pour precipitate rain roar shower sleet snow spit spot
        sprinkle storm swelter teem thaw thunder
      Thematic roles:
        * Theme[+concrete +force]
      Frames:
        Intransitive (Expletive Subject)
          Example: It's raining.
          Syntax: LEX[it] LEX[[+be]] VERB
          Semantics:
            * weather(during(E), Weather_type, ?Theme)
        NP (Expletive Subject, Theme Object)
          Example: It's raining cats and dogs.
          Syntax: LEX[it] LEX[[+be]] VERB NP[Theme]
          Semantics:
            * weather(during(E), Weather_type, Theme)
        PP (Expletive Subject, Theme-PP)
          Example: It was pelting with rain.
          Syntax: LEX[it[+be]] VERB PREP[with] NP[Theme]
          Semantics:
            * weather(during(E), Weather_type, Theme)

Verbnet gives us frames that link the syntax and semantics using an example.
These frames are part of the corpus and we can use `frames()` to get a frame
for a given verbnet class.

    >>> frame = verbnet.frames('57')
    >>> frame == [{'semantics': [{'arguments': [{'value': 'during(E)', 'type': 'Event'}, {'value': 'Weather_type', 'type': 'VerbSpecific'}, {'value': '?Theme', 'type': 'ThemRole'}], 'predicate_value': 'weather'}], 'example': "It's raining.", 'syntax': [{'pos_tag': 'LEX', 'modifiers': {'value': 'it', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'LEX', 'modifiers': {'value': '[+be]', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'VERB', 'modifiers': {'value': '', 'synrestrs': [], 'selrestrs': []}}], 'description': {'primary': 'Intransitive', 'secondary': 'Expletive Subject'}}, {'semantics': [{'arguments': [{'value': 'during(E)', 'type': 'Event'}, {'value': 'Weather_type', 'type': 'VerbSpecific'}, {'value': 'Theme', 'type': 'ThemRole'}], 'predicate_value': 'weather'}], 'example': "It's raining cats and dogs.", 'syntax': [{'pos_tag': 'LEX', 'modifiers': {'value': 'it', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'LEX', 'modifiers': {'value': '[+be]', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'VERB', 'modifiers': {'value': '', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'NP', 'modifiers': {'value': 'Theme', 'synrestrs': [], 'selrestrs': []}}], 'description': {'primary': 'NP', 'secondary': 'Expletive Subject, Theme Object'}}, {'semantics': [{'arguments': [{'value': 'during(E)', 'type': 'Event'}, {'value': 'Weather_type', 'type': 'VerbSpecific'}, {'value': 'Theme', 'type': 'ThemRole'}], 'predicate_value': 'weather'}], 'example': 'It was pelting with rain.', 'syntax': [{'pos_tag': 'LEX', 'modifiers': {'value': 'it[+be]', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'VERB', 'modifiers': {'value': '', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'PREP', 'modifiers': {'value': 'with', 'synrestrs': [], 'selrestrs': []}}, {'pos_tag': 'NP', 'modifiers': {'value': 'Theme', 'synrestrs': [], 'selrestrs': []}}], 'description': {'primary': 'PP', 'secondary': 'Expletive Subject, Theme-PP'}}]
    True

Verbnet corpus lets us access thematic roles individually using `themroles()`.

    >>> themroles = verbnet.themroles('57')
    >>> themroles == [{'modifiers': [{'type': 'concrete', 'value': '+'}, {'type': 'force', 'value': '+'}], 'type': 'Theme'}]
    True

Verbnet classes may also have subclasses sharing similar syntactic and semantic properties
while having differences with the superclass. The Verbnet corpus allows us to access these
subclasses using `subclasses()`.

    >>> print(verbnet.subclasses('9.1')) #Testing for 9.1 since '57' does not have subclasses
    ['put-9.1-1', 'put-9.1-2']


nps_chat
--------

The NPS Chat Corpus, Release 1.0 consists of over 10,000 posts in age-specific
chat rooms, which have been anonymized, POS-tagged and dialogue-act tagged.

    >>> print(nltk.corpus.nps_chat.words())
    ['now', 'im', 'left', 'with', 'this', 'gay', ...]
    >>> print(nltk.corpus.nps_chat.tagged_words())
    [('now', 'RB'), ('im', 'PRP'), ('left', 'VBD'), ...]
    >>> print(nltk.corpus.nps_chat.tagged_posts())
    [[('now', 'RB'), ('im', 'PRP'), ('left', 'VBD'), ('with', 'IN'),
    ('this', 'DT'), ('gay', 'JJ'), ('name', 'NN')], [(':P', 'UH')], ...]

We can access the XML elements corresponding to individual posts.  These elements
have ``class`` and ``user`` attributes that we can access using ``p.attrib['class']``
and ``p.attrib['user']``.  They also have text content, accessed using ``p.text``.

    >>> print(nltk.corpus.nps_chat.xml_posts())
    [<Element 'Post' at 0...>, <Element 'Post' at 0...>, ...]
    >>> posts = nltk.corpus.nps_chat.xml_posts()
    >>> sorted(nltk.FreqDist(p.attrib['class'] for p in posts).keys())
    ['Accept', 'Bye', 'Clarify', 'Continuer', 'Emotion', 'Emphasis',
    'Greet', 'Other', 'Reject', 'Statement', 'System', 'nAnswer',
    'whQuestion', 'yAnswer', 'ynQuestion']
    >>> posts[0].text
    'now im left with this gay name'

In addition to the above methods for accessing tagged text, we can navigate
the XML structure directly, as follows:

    >>> tokens = posts[0].findall('terminals/t')
    >>> [t.attrib['pos'] + "/" + t.attrib['word'] for t in tokens]
    ['RB/now', 'PRP/im', 'VBD/left', 'IN/with', 'DT/this', 'JJ/gay', 'NN/name']

multext_east
------------

The Multext-East Corpus consists of POS-tagged versions of George Orwell's book
1984 in 12 languages: English, Czech, Hungarian, Macedonian, Slovenian, Serbian,
Slovak, Romanian, Estonian, Farsi, Bulgarian and Polish.
The corpus can be accessed using the usual methods for tagged corpora. The tagset
can be transformed from the Multext-East specific MSD tags to the Universal tagset
using the "tagset" parameter of all functions returning tagged parts of the corpus.

    >>> print(nltk.corpus.multext_east.words("oana-en.xml"))
    ['It', 'was', 'a', 'bright', ...]
    >>> print(nltk.corpus.multext_east.tagged_words("oana-en.xml"))
    [('It', '#Pp3ns'), ('was', '#Vmis3s'), ('a', '#Di'), ...]
    >>> print(nltk.corpus.multext_east.tagged_sents("oana-en.xml", "universal"))
    [[('It', 'PRON'), ('was', 'VERB'), ('a', 'DET'), ...]



---------------------
Corpus Reader Classes
---------------------

NLTK's *corpus reader* classes are used to access the contents of a
diverse set of corpora.  Each corpus reader class is specialized to
handle a specific corpus format.  Examples include the
`PlaintextCorpusReader`, which handles corpora that consist of a set
of unannotated text files, and the `BracketParseCorpusReader`, which
handles corpora that consist of files containing
parenthesis-delineated parse trees.

Automatically Created Corpus Reader Instances
=============================================

When the `nltk.corpus` module is imported, it automatically creates a
set of corpus reader instances that can be used to access the corpora
in the NLTK data distribution.  Here is a small sample of those
corpus reader instances:

    >>> import nltk
    >>> nltk.corpus.brown
    <CategorizedTaggedCorpusReader ...>
    >>> nltk.corpus.treebank
    <BracketParseCorpusReader ...>
    >>> nltk.corpus.names
    <WordListCorpusReader ...>
    >>> nltk.corpus.genesis
    <PlaintextCorpusReader ...>
    >>> nltk.corpus.inaugural
    <PlaintextCorpusReader ...>

This sample illustrates that different corpus reader classes are used
to read different corpora; but that the same corpus reader class may
be used for more than one corpus (e.g., ``genesis`` and ``inaugural``).

Creating New Corpus Reader Instances
====================================

Although the `nltk.corpus` module automatically creates corpus reader
instances for the corpora in the NLTK data distribution, you may
sometimes need to create your own corpus reader.  In particular, you
would need to create your own corpus reader if you want...

- To access a corpus that is not included in the NLTK data
  distribution.

- To access a full copy of a corpus for which the NLTK data
  distribution only provides a sample.

- To access a corpus using a customized corpus reader (e.g., with
  a customized tokenizer).

To create a new corpus reader, you will first need to look up the
signature for that corpus reader's constructor.  Different corpus
readers have different constructor signatures, but most of the
constructor signatures have the basic form::

    SomeCorpusReader(root, files, ...options...)

Where ``root`` is an absolute path to the directory containing the
corpus data files; ``files`` is either a list of file names (relative
to ``root``) or a regexp specifying which files should be included;
and ``options`` are additional reader-specific options.  For example,
we can create a customized corpus reader for the genesis corpus that
uses a different sentence tokenizer as follows:

    >>> # Find the directory where the corpus lives.
    >>> genesis_dir = nltk.data.find('corpora/genesis')
    >>> # Create our custom sentence tokenizer.
    >>> my_sent_tokenizer = nltk.RegexpTokenizer('[^.!?]+')
    >>> # Create the new corpus reader object.
    >>> my_genesis = nltk.corpus.PlaintextCorpusReader(
    ...     genesis_dir, r'.*\.txt', sent_tokenizer=my_sent_tokenizer)
    >>> # Use the new corpus reader object.
    >>> print(my_genesis.sents('english-kjv.txt')[0])
    ['In', 'the', 'beginning', 'God', 'created', 'the', 'heaven',
     'and', 'the', 'earth']

If you wish to read your own plaintext corpus, which is stored in the
directory '/usr/share/some-corpus', then you can create a corpus
reader for it with::

    >>> my_corpus = nltk.corpus.PlaintextCorpusReader(
    ...     '/usr/share/some-corpus', r'.*\.txt') # doctest: +SKIP

For a complete list of corpus reader subclasses, see the API
documentation for `nltk.corpus.reader`.

Corpus Types
============

Corpora vary widely in the types of content they include.  This is
reflected in the fact that the base class `CorpusReader` only defines
a few general-purpose methods for listing and accessing the files that
make up a corpus.  It is up to the subclasses to define *data access
methods* that provide access to the information in the corpus.
However, corpus reader subclasses should be consistent in their
definitions of these data access methods wherever possible.

At a high level, corpora can be divided into three basic types:

- A *token corpus* contains information about specific occurrences of
  language use (or linguistic tokens), such as dialogues or written
  texts.  Examples of token corpora are collections of written text
  and collections of speech.

- A *type corpus*, or *lexicon*, contains information about a coherent
  set of lexical items (or linguistic types).  Examples of lexicons
  are dictionaries and word lists.

- A *language description corpus* contains information about a set of
  non-lexical linguistic constructs, such as grammar rules.

However, many individual corpora blur the distinctions between these
types.  For example, corpora that are primarily lexicons may include
token data in the form of example sentences; and corpora that are
primarily token corpora may be accompanied by one or more word lists
or other lexical data sets.

Because corpora vary so widely in their information content, we have
decided that it would not be wise to use separate corpus reader base
classes for different corpus types.  Instead, we simply try to make
the corpus readers consistent wherever possible, but let them differ
where the underlying data itself differs.

Common Corpus Reader Methods
============================

As mentioned above, there are only a handful of methods that all
corpus readers are guaranteed to implement.  These methods provide
access to the files that contain the corpus data.  Every corpus is
assumed to consist of one or more files, all located in a common root
directory (or in subdirectories of that root directory).  The absolute
path to the root directory is stored in the ``root`` property:

    >>> import os
    >>> str(nltk.corpus.genesis.root).replace(os.path.sep,'/')
    '.../nltk_data/corpora/genesis'

Each file within the corpus is identified by a platform-independent
identifier, which is basically a path string that uses ``/`` as the
path separator.  I.e., this identifier can be converted to a relative
path as follows:

    >>> some_corpus_file_id = nltk.corpus.reuters.fileids()[0]
    >>> import os.path
    >>> os.path.normpath(some_corpus_file_id).replace(os.path.sep,'/')
    'test/14826'

To get a list of all data files that make up a corpus, use the
``fileids()`` method.  In some corpora, these files will not all contain
the same type of data; for example, for the ``nltk.corpus.timit``
corpus, ``fileids()`` will return a list including text files, word
segmentation files, phonetic transcription files, sound files, and
metadata files.  For corpora with diverse file types, the ``fileids()``
method will often take one or more optional arguments, which can be
used to get a list of the files with a specific file type:

    >>> nltk.corpus.timit.fileids()
    ['dr1-fvmh0/sa1.phn', 'dr1-fvmh0/sa1.txt', 'dr1-fvmh0/sa1.wav', ...]
    >>> nltk.corpus.timit.fileids('phn')
    ['dr1-fvmh0/sa1.phn', 'dr1-fvmh0/sa2.phn', 'dr1-fvmh0/si1466.phn', ...]

In some corpora, the files are divided into distinct categories.  For
these corpora, the ``fileids()`` method takes an optional argument,
which can be used to get a list of the files within a specific category:

    >>> nltk.corpus.brown.fileids('hobbies')
    ['ce01', 'ce02', 'ce03', 'ce04', 'ce05', 'ce06', 'ce07', ...]

The ``abspath()`` method can be used to find the absolute path to a
corpus file, given its file identifier:

    >>> str(nltk.corpus.brown.abspath('ce06')).replace(os.path.sep,'/')
    '.../corpora/brown/ce06'

The ``abspaths()`` method can be used to find the absolute paths for
one corpus file, a list of corpus files, or (if no fileids are specified),
all corpus files.

This method is mainly useful as a helper method when defining corpus
data access methods, since data access methods can usually be called
with a string argument (to get a view for a specific file), with a
list argument (to get a view for a specific list of files), or with no
argument (to get a view for the whole corpus).

Data Access Methods
===================

Individual corpus reader subclasses typically extend this basic set of
file-access methods with one or more *data access methods*, which provide
easy access to the data contained in the corpus.  The signatures for
data access methods often have the basic form::

    corpus_reader.some_data access(fileids=None, ...options...)

Where ``fileids`` can be a single file identifier string (to get a view
for a specific file); a list of file identifier strings (to get a view
for a specific list of files); or None (to get a view for the entire
corpus).  Some of the common data access methods, and their return
types, are:

  - I{corpus}.words(): list of str
  - I{corpus}.sents(): list of (list of str)
  - I{corpus}.paras(): list of (list of (list of str))
  - I{corpus}.tagged_words(): list of (str,str) tuple
  - I{corpus}.tagged_sents(): list of (list of (str,str))
  - I{corpus}.tagged_paras(): list of (list of (list of (str,str)))
  - I{corpus}.chunked_sents(): list of (Tree w/ (str,str) leaves)
  - I{corpus}.parsed_sents(): list of (Tree with str leaves)
  - I{corpus}.parsed_paras(): list of (list of (Tree with str leaves))
  - I{corpus}.xml(): A single xml ElementTree
  - I{corpus}.raw(): str (unprocessed corpus contents)

For example, the `words()` method is supported by many different
corpora, and returns a flat list of word strings:

    >>> nltk.corpus.brown.words()
    ['The', 'Fulton', 'County', 'Grand', 'Jury', ...]
    >>> nltk.corpus.treebank.words()
    ['Pierre', 'Vinken', ',', '61', 'years', 'old', ...]
    >>> nltk.corpus.conll2002.words()
    ['Sao', 'Paulo', '(', 'Brasil', ')', ',', '23', ...]
    >>> nltk.corpus.genesis.words()
    ['In', 'the', 'beginning', 'God', 'created', ...]

On the other hand, the `tagged_words()` method is only supported by
corpora that include part-of-speech annotations:

    >>> nltk.corpus.brown.tagged_words()
    [('The', 'AT'), ('Fulton', 'NP-TL'), ...]
    >>> nltk.corpus.treebank.tagged_words()
    [('Pierre', 'NNP'), ('Vinken', 'NNP'), ...]
    >>> nltk.corpus.conll2002.tagged_words()
    [('Sao', 'NC'), ('Paulo', 'VMI'), ('(', 'Fpa'), ...]
    >>> nltk.corpus.genesis.tagged_words()
    Traceback (most recent call last):
      ...
    AttributeError: 'PlaintextCorpusReader' object has no attribute 'tagged_words'

Although most corpus readers use file identifiers to index their
content, some corpora use different identifiers instead.  For example,
the data access methods for the ``timit`` corpus uses *utterance
identifiers* to select which corpus items should be returned:

    >>> nltk.corpus.timit.utteranceids()
    ['dr1-fvmh0/sa1', 'dr1-fvmh0/sa2', 'dr1-fvmh0/si1466', ...]
    >>> nltk.corpus.timit.words('dr1-fvmh0/sa2')
    ["don't", 'ask', 'me', 'to', 'carry', 'an', 'oily', 'rag', 'like', 'that']

Attempting to call ``timit``\ 's data access methods with a file
identifier will result in an exception:

    >>> nltk.corpus.timit.fileids()
    ['dr1-fvmh0/sa1.phn', 'dr1-fvmh0/sa1.txt', 'dr1-fvmh0/sa1.wav', ...]
    >>> nltk.corpus.timit.words('dr1-fvmh0/sa1.txt') # doctest: +SKIP
    Traceback (most recent call last):
      ...
    IOError: No such file or directory: '.../dr1-fvmh0/sa1.txt.wrd'

As another example, the ``propbank`` corpus defines the ``roleset()``
method, which expects a roleset identifier, not a file identifier:

    >>> roleset = nltk.corpus.propbank.roleset('eat.01')
    >>> from xml.etree import ElementTree as ET
    >>> print(ET.tostring(roleset).decode('utf8'))
    <roleset id="eat.01" name="consume" vncls="39.1">
      <roles>
        <role descr="consumer, eater" n="0">...</role>...
      </roles>...
    </roleset>...

Stream Backed Corpus Views
==========================
An important feature of NLTK's corpus readers is that many of them
access the underlying data files using "corpus views."  A *corpus
view* is an object that acts like a simple data structure (such as a
list), but does not store the data elements in memory; instead, data
elements are read from the underlying data files on an as-needed
basis.

By only loading items from the file on an as-needed basis, corpus
views maintain both memory efficiency and responsiveness.  The memory
efficiency of corpus readers is important because some corpora contain
very large amounts of data, and storing the entire data set in memory
could overwhelm many machines.  The responsiveness is important when
experimenting with corpora in interactive sessions and in in-class
demonstrations.

The most common corpus view is the `StreamBackedCorpusView`, which
acts as a read-only list of tokens.  Two additional corpus view
classes, `ConcatenatedCorpusView` and `LazySubsequence`, make it
possible to create concatenations and take slices of
`StreamBackedCorpusView` objects without actually storing the
resulting list-like object's elements in memory.

In the future, we may add additional corpus views that act like other
basic data structures, such as dictionaries.

Writing New Corpus Readers
==========================

In order to add support for new corpus formats, it is necessary to
define new corpus reader classes.  For many corpus formats, writing
new corpus readers is relatively straight-forward.  In this section,
we'll describe what's involved in creating a new corpus reader.  If
you do create a new corpus reader, we encourage you to contribute it
back to the NLTK project.

Don't Reinvent the Wheel
------------------------
Before you start writing a new corpus reader, you should check to be
sure that the desired format can't be read using an existing corpus
reader with appropriate constructor arguments.  For example, although
the `TaggedCorpusReader` assumes that words and tags are separated by
``/`` characters by default, an alternative tag-separation character
can be specified via the ``sep`` constructor argument.  You should
also check whether the new corpus format can be handled by subclassing
an existing corpus reader, and tweaking a few methods or variables.

Design
------
If you decide to write a new corpus reader from scratch, then you
should first decide which data access methods you want the reader to
provide, and what their signatures should be.  You should look at
existing corpus readers that process corpora with similar data
contents, and try to be consistent with those corpus readers whenever
possible.

You should also consider what sets of identifiers are appropriate for
the corpus format.  Where it's practical, file identifiers should be
used.  However, for some corpora, it may make sense to use additional
sets of identifiers.  Each set of identifiers should have a distinct
name (e.g., fileids, utteranceids, rolesets); and you should be consistent
in using that name to refer to that identifier.  Do not use parameter
names like ``id``, which leave it unclear what type of identifier is
required.

Once you've decided what data access methods and identifiers are
appropriate for your corpus, you should decide if there are any
customizable parameters that you'd like the corpus reader to handle.
These parameters make it possible to use a single corpus reader to
handle a wider variety of corpora.  The ``sep`` argument for
`TaggedCorpusReader`, mentioned above, is an example of a customizable
corpus reader parameter.

Implementation
--------------

Constructor
~~~~~~~~~~~
If your corpus reader implements any customizable parameters, then
you'll need to override the constructor.  Typically, the new
constructor will first call its base class's constructor, and then
store the customizable parameters.  For example, the
`ConllChunkCorpusReader`\ 's constructor is defined as follows:

    def __init__(self, root, fileids, chunk_types, encoding='utf8',
                 tagset=None, separator=None):
        ConllCorpusReader.__init__(
                self, root, fileids, ('words', 'pos', 'chunk'),
                chunk_types=chunk_types, encoding=encoding,
                tagset=tagset, separator=separator)

If your corpus reader does not implement any customization parameters,
then you can often just inherit the base class's constructor.

Data Access Methods
~~~~~~~~~~~~~~~~~~~

The most common type of data access method takes an argument
identifying which files to access, and returns a view covering those
files.  This argument may be a single file identifier string (to get a
view for a specific file); a list of file identifier strings (to get a
view for a specific list of files); or None (to get a view for the
entire corpus).  The method's implementation converts this argument to
a list of path names using the `abspaths()` method, which handles all
three value types (string, list, and None):

    >>> print(str(nltk.corpus.brown.abspaths()).replace('\\\\','/'))
    [FileSystemPathPointer('.../corpora/brown/ca01'),
     FileSystemPathPointer('.../corpora/brown/ca02'), ...]
    >>> print(str(nltk.corpus.brown.abspaths('ce06')).replace('\\\\','/'))
    [FileSystemPathPointer('.../corpora/brown/ce06')]
    >>> print(str(nltk.corpus.brown.abspaths(['ce06', 'ce07'])).replace('\\\\','/'))
    [FileSystemPathPointer('.../corpora/brown/ce06'),
     FileSystemPathPointer('.../corpora/brown/ce07')]

An example of this type of method is the `words()` method, defined by
the `PlaintextCorpusReader` as follows:

    >>> def words(self, fileids=None):
    ...     return concat([self.CorpusView(fileid, self._read_word_block)
    ...                    for fileid in self.abspaths(fileids)])

This method first uses `abspaths()` to convert ``fileids`` to a list of
absolute paths.  It then creates a corpus view for each file, using
the `PlaintextCorpusReader._read_word_block()` method to read elements
from the data file (see the discussion of corpus views below).
Finally, it combines these corpus views using the
`nltk.corpus.reader.util.concat()` function.

When writing a corpus reader for a corpus that is never expected to be
very large, it can sometimes be appropriate to read the files
directly, rather than using a corpus view.  For example, the
`WordListCorpusView` class defines its `words()` method as follows:

    >>> def words(self, fileids=None):
    ...     return concat([[w for w in open(fileid).read().split('\n') if w]
    ...                    for fileid in self.abspaths(fileids)])

(This is usually more appropriate for lexicons than for token corpora.)

If the type of data returned by a data access method is one for which
NLTK has a conventional representation (e.g., words, tagged words, and
parse trees), then you should use that representation.  Otherwise, you
may find it necessary to define your own representation.  For data
structures that are relatively corpus-specific, it's usually best to
define new classes for these elements.  For example, the ``propbank``
corpus defines the `PropbankInstance` class to store the semantic role
labeling instances described by the corpus; and the ``ppattach``
corpus defines the `PPAttachment` class to store the prepositional
attachment instances described by the corpus.

Corpus Views
~~~~~~~~~~~~
.. (Much of the content for this section is taken from the
   StreamBackedCorpusView docstring.)

The heart of a `StreamBackedCorpusView` is its *block reader*
function, which reads zero or more tokens from a stream, and returns
them as a list.  A very simple example of a block reader is:

    >>> def simple_block_reader(stream):
    ...     return stream.readline().split()

This simple block reader reads a single line at a time, and returns a
single token (consisting of a string) for each whitespace-separated
substring on the line.  A `StreamBackedCorpusView` built from this
block reader will act like a read-only list of all the
whitespace-separated tokens in an underlying file.

When deciding how to define the block reader for a given corpus,
careful consideration should be given to the size of blocks handled by
the block reader.  Smaller block sizes will increase the memory
requirements of the corpus view's internal data structures (by 2
integers per block).  On the other hand, larger block sizes may
decrease performance for random access to the corpus.  (But note that
larger block sizes will *not* decrease performance for iteration.)

Internally, the `StreamBackedCorpusView` class maintains a partial
mapping from token index to file position, with one entry per block.
When a token with a given index *i* is requested, the corpus view
constructs it as follows:

1. First, it searches the toknum/filepos mapping for the token index
   closest to (but less than or equal to) *i*.

2. Then, starting at the file position corresponding to that index, it
   reads one block at a time using the block reader until it reaches
   the requested token.

The toknum/filepos mapping is created lazily: it is initially empty,
but every time a new block is read, the block's initial token is added
to the mapping.  (Thus, the toknum/filepos map has one entry per
block.)

You can create your own corpus view in one of two ways:

1. Call the `StreamBackedCorpusView` constructor, and provide your
   block reader function via the ``block_reader`` argument.

2. Subclass `StreamBackedCorpusView`, and override the
   `read_block()` method.

The first option is usually easier, but the second option can allow
you to write a single `read_block` method whose behavior can be
customized by different parameters to the subclass's constructor.  For
an example of this design pattern, see the `TaggedCorpusView` class,
which is used by `TaggedCorpusView`.

----------------
Regression Tests
----------------

The following helper functions are used to create and then delete
testing corpora that are stored in temporary directories.  These
testing corpora are used to make sure the readers work correctly.

    >>> import tempfile, os.path, textwrap
    >>> def make_testcorpus(ext='', **fileids):
    ...     root = tempfile.mkdtemp()
    ...     for fileid, contents in fileids.items():
    ...         fileid += ext
    ...         f = open(os.path.join(root, fileid), 'w')
    ...         f.write(textwrap.dedent(contents))
    ...         f.close()
    ...     return root
    >>> def del_testcorpus(root):
    ...     for fileid in os.listdir(root):
    ...         os.remove(os.path.join(root, fileid))
    ...     os.rmdir(root)

Plaintext Corpus Reader
=======================
The plaintext corpus reader is used to access corpora that consist of
unprocessed plaintext data.  It assumes that paragraph breaks are
indicated by blank lines.  Sentences and words can be tokenized using
the default tokenizers, or by custom tokenizers specified as
parameters to the constructor.

    >>> root = make_testcorpus(ext='.txt',
    ...     a="""\
    ...     This is the first sentence.  Here is another
    ...     sentence!  And here's a third sentence.
    ...
    ...     This is the second paragraph.  Tokenization is currently
    ...     fairly simple, so the period in Mr. gets tokenized.
    ...     """,
    ...     b="""This is the second file.""")

    >>> from nltk.corpus.reader.plaintext import PlaintextCorpusReader

The list of documents can be specified explicitly, or implicitly (using a
regexp).  The ``ext`` argument specifies a file extension.

    >>> corpus = PlaintextCorpusReader(root, ['a.txt', 'b.txt'])
    >>> corpus.fileids()
    ['a.txt', 'b.txt']
    >>> corpus = PlaintextCorpusReader(root, r'.*\.txt')
    >>> corpus.fileids()
    ['a.txt', 'b.txt']

The directory containing the corpus is corpus.root:

    >>> str(corpus.root) == str(root)
    True

We can get a list of words, or the raw string:

    >>> corpus.words()
    ['This', 'is', 'the', 'first', 'sentence', '.', ...]
    >>> corpus.raw()[:40]
    'This is the first sentence.  Here is ano'

Check that reading individual documents works, and reading all documents at
once works:

    >>> len(corpus.words()), [len(corpus.words(d)) for d in corpus.fileids()]
    (46, [40, 6])
    >>> corpus.words('a.txt')
    ['This', 'is', 'the', 'first', 'sentence', '.', ...]
    >>> corpus.words('b.txt')
    ['This', 'is', 'the', 'second', 'file', '.']
    >>> corpus.words()[:4], corpus.words()[-4:]
    (['This', 'is', 'the', 'first'], ['the', 'second', 'file', '.'])

We're done with the test corpus:

    >>> del_testcorpus(root)

Test the plaintext corpora that come with nltk:

    >>> from nltk.corpus import abc, genesis, inaugural
    >>> from nltk.corpus import state_union, webtext
    >>> for corpus in (abc, genesis, inaugural, state_union,
    ...                webtext):
    ...     print(str(corpus).replace('\\\\','/'))
    ...     print('  ', repr(corpus.fileids())[:60])
    ...     print('  ', repr(corpus.words()[:10])[:60])
    <PlaintextCorpusReader in '.../nltk_data/corpora/ab...'>
       ['rural.txt', 'science.txt']
       ['PM', 'denies', 'knowledge', 'of', 'AWB', ...
    <PlaintextCorpusReader in '.../nltk_data/corpora/genesi...'>
       ['english-kjv.txt', 'english-web.txt', 'finnish.txt', ...
       ['In', 'the', 'beginning', 'God', 'created', 'the', ...
    <PlaintextCorpusReader in '.../nltk_data/corpora/inaugura...'>
       ['1789-Washington.txt', '1793-Washington.txt', ...
       ['Fellow', '-', 'Citizens', 'of', 'the', 'Senate', ...
    <PlaintextCorpusReader in '.../nltk_data/corpora/state_unio...'>
       ['1945-Truman.txt', '1946-Truman.txt', ...
       ['PRESIDENT', 'HARRY', 'S', '.', 'TRUMAN', "'", ...
    <PlaintextCorpusReader in '.../nltk_data/corpora/webtex...'>
       ['firefox.txt', 'grail.txt', 'overheard.txt', ...
       ['Cookie', 'Manager', ':', '"', 'Don', "'", 't', ...


Tagged Corpus Reader
====================
The Tagged Corpus reader can give us words, sentences, and paragraphs,
each tagged or untagged.  All of the read methods can take one item
(in which case they return the contents of that file) or a list of
documents (in which case they concatenate the contents of those files).
By default, they apply to all documents in the corpus.

    >>> root = make_testcorpus(
    ...     a="""\
    ...     This/det is/verb the/det first/adj sentence/noun ./punc
    ...     Here/det  is/verb  another/adj    sentence/noun ./punc
    ...     Note/verb that/comp you/pron can/verb use/verb \
    ...           any/noun tag/noun set/noun
    ...
    ...     This/det is/verb the/det second/adj paragraph/noun ./punc
    ...     word/n without/adj a/det tag/noun :/: hello ./punc
    ...     """,
    ...     b="""\
    ...     This/det is/verb the/det second/adj file/noun ./punc
    ...     """)

    >>> from nltk.corpus.reader.tagged import TaggedCorpusReader
    >>> corpus = TaggedCorpusReader(root, list('ab'))
    >>> corpus.fileids()
    ['a', 'b']
    >>> str(corpus.root) == str(root)
    True
    >>> corpus.words()
    ['This', 'is', 'the', 'first', 'sentence', '.', ...]
    >>> corpus.sents()
    [['This', 'is', 'the', 'first', ...], ['Here', 'is', 'another'...], ...]
    >>> corpus.paras()
    [[['This', ...], ['Here', ...], ...], [['This', ...], ...], ...]
    >>> corpus.tagged_words()
    [('This', 'DET'), ('is', 'VERB'), ('the', 'DET'), ...]
    >>> corpus.tagged_sents()
    [[('This', 'DET'), ('is', 'VERB'), ...], [('Here', 'DET'), ...], ...]
    >>> corpus.tagged_paras()
    [[[('This', 'DET'), ...], ...], [[('This', 'DET'), ...], ...], ...]
    >>> corpus.raw()[:40]
    'This/det is/verb the/det first/adj sente'
    >>> len(corpus.words()), [len(corpus.words(d)) for d in corpus.fileids()]
    (38, [32, 6])
    >>> len(corpus.sents()), [len(corpus.sents(d)) for d in corpus.fileids()]
    (6, [5, 1])
    >>> len(corpus.paras()), [len(corpus.paras(d)) for d in corpus.fileids()]
    (3, [2, 1])
    >>> print(corpus.words('a'))
    ['This', 'is', 'the', 'first', 'sentence', '.', ...]
    >>> print(corpus.words('b'))
    ['This', 'is', 'the', 'second', 'file', '.']
    >>> del_testcorpus(root)

The Brown Corpus uses the tagged corpus reader:

    >>> from nltk.corpus import brown
    >>> brown.fileids()
    ['ca01', 'ca02', 'ca03', 'ca04', 'ca05', 'ca06', 'ca07', ...]
    >>> brown.categories()
    ['adventure', 'belles_lettres', 'editorial', 'fiction', 'government', 'hobbies', 'humor',
    'learned', 'lore', 'mystery', 'news', 'religion', 'reviews', 'romance', 'science_fiction']
    >>> print(repr(brown.root).replace('\\\\','/'))
    FileSystemPathPointer('.../corpora/brown')
    >>> brown.words()
    ['The', 'Fulton', 'County', 'Grand', 'Jury', ...]
    >>> brown.sents()
    [['The', 'Fulton', 'County', 'Grand', ...], ...]
    >>> brown.paras()
    [[['The', 'Fulton', 'County', ...]], [['The', 'jury', ...]], ...]
    >>> brown.tagged_words()
    [('The', 'AT'), ('Fulton', 'NP-TL'), ...]
    >>> brown.tagged_sents()
    [[('The', 'AT'), ('Fulton', 'NP-TL'), ('County', 'NN-TL'), ...], ...]
    >>> brown.tagged_paras()
    [[[('The', 'AT'), ...]], [[('The', 'AT'), ...]], ...]

Verbnet Corpus Reader
=====================

Make sure we're picking up the right number of elements:

    >>> from nltk.corpus import verbnet
    >>> len(verbnet.lemmas())
    3621
    >>> len(verbnet.wordnetids())
    4953
    >>> len(verbnet.classids())
    429

Selecting classids based on various selectors:

    >>> verbnet.classids(lemma='take')
    ['bring-11.3', 'characterize-29.2', 'convert-26.6.2', 'cost-54.2',
    'fit-54.3', 'performance-26.7-2', 'steal-10.5']
    >>> verbnet.classids(wordnetid='lead%2:38:01')
    ['accompany-51.7']
    >>> verbnet.classids(fileid='approve-77.xml')
    ['approve-77']
    >>> verbnet.classids(classid='admire-31.2') # subclasses
    ['admire-31.2-1']

vnclass() accepts filenames, long ids, and short ids:

    >>> a = ElementTree.tostring(verbnet.vnclass('admire-31.2.xml'))
    >>> b = ElementTree.tostring(verbnet.vnclass('admire-31.2'))
    >>> c = ElementTree.tostring(verbnet.vnclass('31.2'))
    >>> a == b == c
    True

fileids() can be used to get files based on verbnet class ids:

    >>> verbnet.fileids('admire-31.2')
    ['admire-31.2.xml']
    >>> verbnet.fileids(['admire-31.2', 'obtain-13.5.2'])
    ['admire-31.2.xml', 'obtain-13.5.2.xml']
    >>> verbnet.fileids('badidentifier')
    Traceback (most recent call last):
      . . .
    ValueError: vnclass identifier 'badidentifier' not found

longid() and shortid() can be used to convert identifiers:

    >>> verbnet.longid('31.2')
    'admire-31.2'
    >>> verbnet.longid('admire-31.2')
    'admire-31.2'
    >>> verbnet.shortid('31.2')
    '31.2'
    >>> verbnet.shortid('admire-31.2')
    '31.2'
    >>> verbnet.longid('badidentifier')
    Traceback (most recent call last):
      . . .
    ValueError: vnclass identifier 'badidentifier' not found
    >>> verbnet.shortid('badidentifier')
    Traceback (most recent call last):
      . . .
    ValueError: vnclass identifier 'badidentifier' not found

Corpus View Regression Tests
============================

Select some corpus files to play with:

    >>> import nltk.data
    >>> # A very short file (160 chars):
    >>> f1 = nltk.data.find('corpora/inaugural/README')
    >>> # A relatively short file (791 chars):
    >>> f2 = nltk.data.find('corpora/inaugural/1793-Washington.txt')
    >>> # A longer file (32k chars):
    >>> f3 = nltk.data.find('corpora/inaugural/1909-Taft.txt')
    >>> fileids = [f1, f2, f3]


Concatenation
-------------
Check that concatenation works as intended.

    >>> from nltk.corpus.reader.util import *

    >>> c1 = StreamBackedCorpusView(f1, read_whitespace_block, encoding='utf-8')
    >>> c2 = StreamBackedCorpusView(f2, read_whitespace_block, encoding='utf-8')
    >>> c3 = StreamBackedCorpusView(f3, read_whitespace_block, encoding='utf-8')
    >>> c123 = c1+c2+c3
    >>> print(c123)
    ['C-Span', 'Inaugural', 'Address', 'Corpus', 'US', ...]

    >>> l1 = f1.open(encoding='utf-8').read().split()
    >>> l2 = f2.open(encoding='utf-8').read().split()
    >>> l3 = f3.open(encoding='utf-8').read().split()
    >>> l123 = l1+l2+l3

    >>> list(c123) == l123
    True

    >>> (c1+c2+c3)[100] == l123[100]
    True

Slicing
-------
First, do some tests with fairly small slices.  These will all
generate tuple values.

    >>> from nltk.util import LazySubsequence
    >>> c1 = StreamBackedCorpusView(f1, read_whitespace_block, encoding='utf-8')
    >>> l1 = f1.open(encoding='utf-8').read().split()
    >>> print(len(c1))
    21
    >>> len(c1) < LazySubsequence.MIN_SIZE
    True

Choose a list of indices, based on the length, that covers the
important corner cases:

    >>> indices = [-60, -30, -22, -21, -20, -1,
    ...            0, 1, 10, 20, 21, 22, 30, 60]

Test slicing with explicit start & stop value:

    >>> for s in indices:
    ...     for e in indices:
    ...         assert list(c1[s:e]) == l1[s:e]

Test slicing with stop=None:

    >>> for s in indices:
    ...     assert list(c1[s:]) == l1[s:]

Test slicing with start=None:

    >>> for e in indices:
    ...     assert list(c1[:e]) == l1[:e]

Test slicing with start=stop=None:

    >>> list(c1[:]) == list(l1[:])
    True

Next, we'll do some tests with much longer slices.  These will
generate LazySubsequence objects.

    >>> c3 = StreamBackedCorpusView(f3, read_whitespace_block, encoding='utf-8')
    >>> l3 = f3.open(encoding='utf-8').read().split()
    >>> print(len(c3))
    5430
    >>> len(c3) > LazySubsequence.MIN_SIZE*2
    True

Choose a list of indices, based on the length, that covers the
important corner cases:

    >>> indices = [-12000, -6000, -5431, -5430, -5429, -3000, -200, -1,
    ...            0, 1, 200, 3000, 5000, 5429, 5430, 5431, 6000, 12000]

Test slicing with explicit start & stop value:

    >>> for s in indices:
    ...     for e in indices:
    ...         assert list(c3[s:e]) == l3[s:e]

Test slicing with stop=None:

    >>> for s in indices:
    ...     assert list(c3[s:]) == l3[s:]

Test slicing with start=None:

    >>> for e in indices:
    ...     assert list(c3[:e]) == l3[:e]

Test slicing with start=stop=None:

    >>> list(c3[:]) == list(l3[:])
    True

Multiple Iterators
------------------
If multiple iterators are created for the same corpus view, their
iteration can be interleaved:

    >>> c3 = StreamBackedCorpusView(f3, read_whitespace_block)
    >>> iterators = [c3.iterate_from(n) for n in [0,15,30,45]]
    >>> for i in range(15):
    ...     for iterator in iterators:
    ...         print('%-15s' % next(iterator), end=' ')
    ...     print()
    My              a               duties          in
    fellow          heavy           of              a
    citizens:       weight          the             proper
    Anyone          of              office          sense
    who             responsibility. upon            of
    has             If              which           the
    taken           not,            he              obligation
    the             he              is              which
    oath            has             about           the
    I               no              to              oath
    have            conception      enter,          imposes.
    just            of              or              The
    taken           the             he              office
    must            powers          is              of
    feel            and             lacking         an

SeekableUnicodeStreamReader
===========================

The file-like objects provided by the ``codecs`` module unfortunately
suffer from a bug that prevents them from working correctly with
corpus view objects.  In particular, although the expose ``seek()``
and ``tell()`` methods, those methods do not exhibit the expected
behavior, because they are not synchronized with the internal buffers
that are kept by the file-like objects.  For example, the ``tell()``
method will return the file position at the end of the buffers (whose
contents have not yet been returned by the stream); and therefore this
file position can not be used to return to the 'current' location in
the stream (since ``seek()`` has no way to reconstruct the buffers).

To get around these problems, we define a new class,
`SeekableUnicodeStreamReader`, to act as a file-like interface to
files containing encoded unicode data.  This class is loosely based on
the ``codecs.StreamReader`` class.  To construct a new reader, we call
the constructor with an underlying stream and an encoding name:

    >>> from io import StringIO, BytesIO
    >>> from nltk.data import SeekableUnicodeStreamReader
    >>> stream = BytesIO(b"""\
    ... This is a test file.
    ... It is encoded in ascii.
    ... """.decode('ascii').encode('ascii'))
    >>> reader = SeekableUnicodeStreamReader(stream, 'ascii')

`SeekableUnicodeStreamReader`\ s support all of the normal operations
supplied by a read-only stream.  Note that all of the read operations
return ``unicode`` objects (not ``str`` objects).

    >>> reader.read()         # read the entire file.
    'This is a test file.\nIt is encoded in ascii.\n'
    >>> reader.seek(0)        # rewind to the start.
    >>> reader.read(5)        # read at most 5 bytes.
    'This '
    >>> reader.readline()     # read to the end of the line.
    'is a test file.\n'
    >>> reader.seek(0)        # rewind to the start.
    >>> for line in reader:
    ...     print(repr(line))      # iterate over lines
    'This is a test file.\n'
    'It is encoded in ascii.\n'
    >>> reader.seek(0)        # rewind to the start.
    >>> reader.readlines()    # read a list of line strings
    ['This is a test file.\n', 'It is encoded in ascii.\n']
    >>> reader.close()

Size argument to ``read()``
---------------------------
The ``size`` argument to ``read()`` specifies the maximum number of
*bytes* to read, not the maximum number of *characters*.  Thus, for
encodings that use multiple bytes per character, it may return fewer
characters than the ``size`` argument:

    >>> stream = BytesIO(b"""\
    ... This is a test file.
    ... It is encoded in utf-16.
    ... """.decode('ascii').encode('utf-16'))
    >>> reader = SeekableUnicodeStreamReader(stream, 'utf-16')
    >>> reader.read(10)
    'This '

If a read block ends in the middle of the byte string encoding a
single character, then that byte string is stored in an internal
buffer, and re-used on the next call to ``read()``.  However, if the
size argument is too small to read even a single character, even
though at least one character is available, then the ``read()`` method
will read additional bytes until it can return a single character.
This ensures that the ``read()`` method does not return an empty
string, which could be mistaken for indicating the end of the file.

    >>> reader.seek(0)            # rewind to the start.
    >>> reader.read(1)            # we actually need to read 4 bytes
    'T'
    >>> int(reader.tell())
    4

The ``readline()`` method may read more than a single line of text, in
which case it stores the text that it does not return in a buffer.  If
this buffer is not empty, then its contents will be included in the
value returned by the next call to ``read()``, regardless of the
``size`` argument, since they are available without reading any new
bytes from the stream:

    >>> reader.seek(0)            # rewind to the start.
    >>> reader.readline()         # stores extra text in a buffer
    'This is a test file.\n'
    >>> print(reader.linebuffer)   # examine the buffer contents
    ['It is encoded i']
    >>> reader.read(0)            # returns the contents of the buffer
    'It is encoded i'
    >>> print(reader.linebuffer)   # examine the buffer contents
    None

Seek and Tell
-------------
In addition to these basic read operations,
`SeekableUnicodeStreamReader` also supports the ``seek()`` and
``tell()`` operations.  However, some care must still be taken when
using these operations.  In particular, the only file offsets that
should be passed to ``seek()`` are ``0`` and any offset that has been
returned by ``tell``.

    >>> stream = BytesIO(b"""\
    ... This is a test file.
    ... It is encoded in utf-16.
    ... """.decode('ascii').encode('utf-16'))
    >>> reader = SeekableUnicodeStreamReader(stream, 'utf-16')
    >>> reader.read(20)
    'This is a '
    >>> pos = reader.tell(); print(pos)
    22
    >>> reader.read(20)
    'test file.'
    >>> reader.seek(pos)     # rewind to the position from tell.
    >>> reader.read(20)
    'test file.'

The ``seek()`` and ``tell()`` methods work property even when
``readline()`` is used.

    >>> stream = BytesIO(b"""\
    ... This is a test file.
    ... It is encoded in utf-16.
    ... """.decode('ascii').encode('utf-16'))
    >>> reader = SeekableUnicodeStreamReader(stream, 'utf-16')
    >>> reader.readline()
    'This is a test file.\n'
    >>> pos = reader.tell(); print(pos)
    44
    >>> reader.readline()
    'It is encoded in utf-16.\n'
    >>> reader.seek(pos)     # rewind to the position from tell.
    >>> reader.readline()
    'It is encoded in utf-16.\n'


Squashed Bugs
=============

svn 5276 fixed a bug in the comment-stripping behavior of
parse_sexpr_block.

    >>> from io import StringIO
    >>> from nltk.corpus.reader.util import read_sexpr_block
    >>> f = StringIO(b"""
    ... (a b c)
    ... # This line is a comment.
    ... (d e f\ng h)""".decode('ascii'))
    >>> print(read_sexpr_block(f, block_size=38, comment_char='#'))
    ['(a b c)']
    >>> print(read_sexpr_block(f, block_size=38, comment_char='#'))
    ['(d e f\ng h)']

svn 5277 fixed a bug in parse_sexpr_block, which would cause it to
enter an infinite loop if a file ended mid-sexpr, or ended with a
token that was not followed by whitespace.  A related bug caused
an infinite loop if the corpus ended in an unmatched close paren --
this was fixed in svn 5279

    >>> f = StringIO(b"""
    ... This file ends mid-sexpr
    ... (hello (world""".decode('ascii'))
    >>> for i in range(3): print(read_sexpr_block(f))
    ['This', 'file', 'ends', 'mid-sexpr']
    ['(hello (world']
    []

    >>> f = StringIO(b"This file has no trailing whitespace.".decode('ascii'))
    >>> for i in range(3): print(read_sexpr_block(f))
    ['This', 'file', 'has', 'no', 'trailing']
    ['whitespace.']
    []

    >>> # Bug fixed in 5279:
    >>> f = StringIO(b"a b c)".decode('ascii'))
    >>> for i in range(3): print(read_sexpr_block(f))
    ['a', 'b']
    ['c)']
    []


svn 5624 & 5265 fixed a bug in ConcatenatedCorpusView, which caused it
to return the wrong items when indexed starting at any index beyond
the first file.

    >>> import nltk
    >>> sents = nltk.corpus.brown.sents()
    >>> print(sents[6000])
    ['Cholesterol', 'and', 'thyroid']
    >>> print(sents[6000])
    ['Cholesterol', 'and', 'thyroid']

svn 5728 fixed a bug in Categorized*CorpusReader, which caused them
to return words from *all* files when just one file was specified.

    >>> from nltk.corpus import reuters
    >>> reuters.words('training/13085')
    ['SNYDER', '&', 'lt', ';', 'SOI', '>', 'MAKES', ...]
    >>> reuters.words('training/5082')
    ['SHEPPARD', 'RESOURCES', 'TO', 'MERGE', 'WITH', ...]

svn 7227 fixed a bug in the qc corpus reader, which prevented
access to its tuples() method

    >>> from nltk.corpus import qc
    >>> qc.tuples('test.txt')
    [('NUM:dist', 'How far is it from Denver to Aspen ?'), ('LOC:city', 'What county is Modesto , California in ?'), ...]

Ensure that KEYWORD from `comparative_sents.py` no longer contains a ReDoS vulnerability.

    >>> import re
    >>> import time
    >>> from nltk.corpus.reader.comparative_sents import KEYWORD
    >>> sizes = {
    ...     "short": 4000,
    ...     "long": 40000
    ... }
    >>> exec_times = {
    ...     "short": [],
    ...     "long": [],
    ... }
    >>> for size_name, size in sizes.items():
    ...     for j in range(9):
    ...         start_t = time.perf_counter()
    ...         payload = "( " + "(" * size
    ...         output = KEYWORD.findall(payload)
    ...         exec_times[size_name].append(time.perf_counter() - start_t)
    ...     exec_times[size_name] = sorted(exec_times[size_name])[4] # Get the mean

Ideally, the execution time of such a regular expression is linear
in the length of the input. As such, we would expect exec_times["long"]
to be roughly 10 times as big as exec_times["short"].
With the ReDoS in place, it took roughly 80 times as long.
For now, we accept values below 30 (times as long), due to the potential
for variance. This ensures that the ReDoS has certainly been reduced,
if not removed.

    >>> exec_times["long"] / exec_times["short"] < 30
    True