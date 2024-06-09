Search.setIndex({"alltitles": {"(Optional) - Refining the generated images": [[8, "optional-refining-the-generated-images"]], "Adding Positional Embeddings": [[1, "adding-positional-embeddings"]], "Attention = V*softmax(QK.T/sqrt(H))": [[4, "attention-v-softmax-qk-t-sqrt-h"]], "Attention Head": [[5, "attention-head"]], "Attention is a communication mechanism": [[4, "attention-is-a-communication-mechanism"]], "Bigram Model": [[2, "bigram-model"]], "Bigram Model with Linear layer & Token + Positional embeddings": [[3, "bigram-model-with-linear-layer-token-positional-embeddings"]], "Bigram Model with Linear layer & token/pos embeddings": [[3, "bigram-model-with-linear-layer-token-pos-embeddings"]], "Building the Embedding Layer": [[1, "building-the-embedding-layer"]], "Building the Feedforward Neural Network": [[1, "building-the-feedforward-neural-network"]], "Data": [[4, "data"], [6, "data"], [7, "data"]], "Data Loading": [[5, "data-loading"]], "Dataset": [[2, "dataset"], [3, "dataset"]], "Embedding Table": [[2, "embedding-table"]], "Encoder vs Decoder": [[4, "encoder-vs-decoder"]], "Feedback": [[0, null]], "Finetuning SDXL DreamBooth using AutoTrain": [[8, "finetuning-sdxl-dreambooth-using-autotrain"]], "Generating images for your own prompt": [[8, "generating-images-for-your-own-prompt"]], "Getting Started": [[1, "getting-started"]], "Head, MHSA": [[6, "head-mhsa"], [7, "head-mhsa"]], "Hyperparameters": [[2, "hyperparameters"], [3, "hyperparameters"], [4, "hyperparameters"], [5, "hyperparameters"], [6, "hyperparameters"], [7, "hyperparameters"]], "Implementing the Attention Mechanism": [[1, "implementing-the-attention-mechanism"]], "Importing modules and building the Stable Diffusion pipeline": [[8, "importing-modules-and-building-the-stable-diffusion-pipeline"]], "Inference": [[2, "inference"], [3, "inference"], [5, "inference"], [6, "inference"], [7, "inference"]], "Installing AutoTrain": [[8, "installing-autotrain"]], "Introducing Multi-Head Self-Attention": [[1, "introducing-multi-head-self-attention"]], "Introduction to Building nanoGPT": [[1, "introduction-to-building-nanogpt"]], "Limitation": [[2, "limitation"]], "Model": [[2, "model"], [5, "model"], [6, "model"], [7, "model"]], "Model: Self attention + Linear + pos/token embeddings": [[4, "model-self-attention-linear-pos-token-embeddings"]], "Multiple Heads, Feedforward Layer": [[5, "multiple-heads-feedforward-layer"]], "Output": [[4, "output"]], "Part 1 - Training the pre-trained model": [[8, "part-1-training-the-pre-trained-model"]], "Part 2 - Generating images": [[8, "part-2-generating-images"]], "Projection, Layernorm, Dropout": [[7, "projection-layernorm-dropout"]], "References and Links": [[8, "references-and-links"]], "Residual Connections, Transformer Block": [[6, "residual-connections-transformer-block"]], "Results": [[2, "results"]], "Save model weights to Google Drive": [[8, "save-model-weights-to-google-drive"]], "Self Attention": [[4, "self-attention"], [4, "id1"]], "Session 01": [[0, null]], "Session 02": [[0, null]], "Setting up a training session": [[8, "setting-up-a-training-session"]], "Tokens & Vocabulary": [[2, "tokens-vocabulary"]], "Training": [[2, "training"], [2, "id1"], [3, "training"], [4, "training"], [5, "training"], [6, "training"], [7, "training"]], "Training and Evaluating nanoGPT": [[1, "training-and-evaluating-nanogpt"]], "Transformer Block": [[6, "transformer-block"], [7, "transformer-block"]], "Understanding Tokenization and Encoding": [[1, "understanding-tokenization-and-encoding"]], "Welcome to Introduction to Generative AI Workshop": [[0, "welcome-to-introduction-to-generative-ai-workshop"]], "What next?": [[8, "what-next"]]}, "docnames": ["intro", "notebooks/S1/Session1", "notebooks/S1/Session_1_1", "notebooks/S1/Session_1_2", "notebooks/S1/Session_1_3", "notebooks/S1/Session_1_4", "notebooks/S1/Session_1_5", "notebooks/S1/Session_1_6", "notebooks/S2/Session_2_1"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1}, "filenames": ["intro.md", "notebooks/S1/Session1.md", "notebooks/S1/Session_1_1.ipynb", "notebooks/S1/Session_1_2.ipynb", "notebooks/S1/Session_1_3.ipynb", "notebooks/S1/Session_1_4.ipynb", "notebooks/S1/Session_1_5.ipynb", "notebooks/S1/Session_1_6.ipynb", "notebooks/S2/Session_2_1.ipynb"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [1, 2, 3, 4, 5, 6, 7, 8], "0": [2, 3, 4, 5, 6, 7, 8], "00": 5, "000": 2, "0083": 2, "01": [2, 3, 4, 6], "02": [2, 5, 6], "0241": 3, "03": [2, 7], "0460": 7, "0526": 3, "0550": 7, "06": [2, 3, 4, 5, 6, 7], "06m": [2, 3, 4, 5, 6, 7], "0731": 2, "08": 7, "0822": 3, "0893": 7, "09": [2, 3, 4, 5, 6, 7], "0914": 3, "0948": 3, "0x7b019efb6210": 4, "0x7bfa0c1bde50": 7, "0x7c39c01b60b0": 6, "0x7e71f812e250": 3, "0x7f5fbc33a210": 5, "1": [2, 3, 4, 5, 6, 7], "10": 4, "100": [2, 3, 4, 5, 6, 7], "1000": [4, 5, 6, 7], "1010": 2, "1017": 7, "1024": 8, "1060": [2, 7], "108": [2, 3, 4, 5, 6, 7], "109": [3, 4, 5, 6, 7], "110": [2, 3, 4, 6, 7], "111": [2, 5], "1115394": [2, 3, 4, 5, 6, 7], "1122": 7, "1125": 7, "12": 6, "1200": [2, 3], "1216": 6, "13": [2, 6], "1305": 6, "1324": 7, "133": [2, 3, 4, 5, 6, 7], "1337": [2, 3, 4, 5, 6, 7], "1350": 2, "1367": 2, "13th": 2, "1424": 3, "1452": 6, "15": 2, "1500": [2, 3, 4, 5, 6, 7], "1516": 7, "1589": 6, "15th": 2, "1624": [6, 7], "1643": 2, "1673": 6, "1715": 7, "18": [3, 4, 5], "1800": [2, 3], "185": [2, 3, 4, 5, 6, 7], "1878": 2, "1886": 7, "18mb": 4, "1947": 6, "1949": 6, "19680801": [], "199": [2, 3, 4, 5, 6, 7], "1995": 5, "1996": 5, "1e": [2, 3, 4, 5, 6, 7, 8], "1m": [2, 3, 4, 5, 6, 7], "2": [2, 3, 4, 5, 6, 7], "200": [2, 3, 4, 5, 6, 7], "2000": [4, 5, 6, 7], "2024": [2, 3, 4, 5, 6, 7, 8], "2047": 4, "2060": 7, "2100": [2, 3], "2134": 6, "2286": 5, "23": 2, "2323": [6, 7], "2332": 6, "2400": [2, 3], "2411": 5, "2435": 5, "2468": 5, "2469": 3, "2495": 5, "2500": [4, 5, 6, 7], "256": 7, "2590": 6, "26": 7, "2700": [2, 3], "2721": 5, "2765": 3, "2825": 6, "2828": 5, "2863": 3, "2917": 3, "2936": 5, "2973": 7, "3": [2, 3, 4, 5, 6, 7, 8], "300": [2, 3], "3000": [2, 3, 4, 5, 6, 7], "3018": 5, "3036": 2, "3045": 6, "3072": 7, "31": [3, 7], "32": [2, 3, 4, 5, 6, 7], "3221": 5, "3297": 5, "3337": 3, "3470": 5, "3500": [4, 5, 6, 7], "3694": 6, "3759": 7, "3777": 7, "3778": 2, "38": 3, "3802": 6, "3951": 5, "3956": 4, "3974": 5, "3978": 2, "3980": 4, "3992": 4, "3kh": 2, "4": [2, 3, 4, 5, 6, 7, 8], "40": 2, "4000": [4, 5, 6, 7], "4041": 4, "4084": 4, "4130": 4, "42": 8, "4212": 4, "4272": 4, "43": 2, "4327": 4, "4408": 4, "443": [2, 3, 4, 5, 6, 7], "4434": 7, "4435": 4, "4500": [4, 5, 6, 7], "4523": 4, "4585": 7, "4599": 3, "46": 3, "4629": 5, "4651": 5, "4775": 4, "4829": 4, "4f": [2, 3, 4, 5, 6, 7], "4k": 8, "5": [4, 5, 6, 7, 8], "500": [2, 3, 4, 5, 6, 7, 8], "5000": [4, 5, 6, 7], "5139": 6, "5196": 4, "52": 4, "5303": 4, "5350": 6, "55": 5, "5993": 5, "6": [3, 7], "600": [2, 3], "6077": 5, "64": [2, 7], "65": [2, 3, 4, 5, 6, 7], "6911": 4, "7": 2, "7067": 2, "7087": 4, "7220": 2, "7221": 2, "7486": 2, "8": [2, 3, 4, 5, 6, 7], "8060": 6, "8173": 3, "8259": 3, "8283": 6, "8582": 2, "8679": 3, "8bit": 8, "9": [2, 3, 4, 5, 6, 7], "90": [2, 3, 4, 5, 6, 7], "900": [2, 3], "9125": 2, "9184": 2, "9232": 2, "9553": 3, "9623": 3, "9825": 2, "9930": 3, "9934": 3, "9978": 3, "A": [2, 4], "AS": 7, "And": [6, 7], "As": 7, "Ase": 3, "But": [2, 8], "By": [1, 7], "For": [1, 4, 8], "If": [1, 2, 7], "In": [1, 8], "It": [2, 8], "Of": 7, "One": [4, 5, 6, 7], "That": 4, "The": [0, 2, 7, 8], "There": [], "These": [1, 3], "To": [1, 7, 8], "With": 0, "_": [2, 3, 4, 5, 6, 7], "__init__": [2, 3, 4, 5, 6, 7], "_c": [3, 4, 5, 6, 7], "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz": [2, 3, 4, 5, 6, 7], "abil": 1, "ablourgh": 7, "about": [5, 6, 7], "abov": 8, "acc": [2, 3, 4, 5, 6, 7], "accept": [], "access": [0, 1], "accumul": [4, 8], "acfomvid": 2, "act": [2, 5, 6, 7], "action": 1, "actual": 2, "ad": [3, 6, 7], "adam": 8, "adamw": [2, 3, 4, 5, 6, 7], "add": [1, 4, 8], "add_": [], "addition": 1, "adu": 7, "advanc": 8, "ae": 3, "aecath": 4, "aepal": 5, "aeptha": 3, "affin": [4, 5, 6, 7], "aggreg": 4, "agli": 7, "ai": [5, 8], "aicecat": 4, "aim": [0, 1], "aist": 2, "align": [], "all": [0, 2, 3, 4, 5, 6, 7, 8], "allow": 1, "along": 7, "aloo": 4, "alphabet": 2, "alphons": 8, "also": [3, 5, 6, 7], "alutor": 3, "alysathef": 4, "am": [4, 7], "an": [0, 2, 5, 6, 7, 8], "analys": [4, 5, 6, 7], "analysi": 4, "anc": 7, "ander": 7, "andrej": 1, "andtfousail": 7, "ang": 7, "angeight": 7, "ani": 8, "ano": 4, "ant": 5, "appear": 8, "appli": [4, 7], "ar": [2, 3, 4, 5, 6, 7, 8], "arag": 7, "arang": [3, 4, 5, 6, 7], "architectur": 1, "area": 0, "argito": 5, "arm": 4, "around": [6, 7], "arrai": [2, 3, 4, 5, 6, 7], "art": 8, "artgerm": 8, "artstat": 8, "ase": 2, "aslould": 7, "aspect": 1, "assign": [1, 2], "ast": 7, "asta": 7, "atl": 4, "atr": 4, "attent": [0, 6, 7], "au": 7, "auckk": 7, "auto": 2, "autogress": 4, "autoregress": 4, "autotrain": 0, "av": 5, "avail": 8, "avoid": 8, "avyw": 2, "await": [2, 3, 4, 5, 6, 7], "ax": [], "axi": 8, "b": [2, 3, 4, 5, 6, 7], "ba": 5, "back": 1, "background": 8, "backward": [2, 3, 4, 5, 6, 7], "bai": 4, "bank": 8, "bantauchar": 5, "baragh": 4, "base": [2, 8], "basic": [1, 8], "batch": [2, 3, 4, 5, 6, 7, 8], "batch_siz": 8, "bath": 7, "bear": 7, "beard": 7, "beatireplim": 4, "been": 8, "befor": [7, 8], "begin": 1, "being": [4, 5], "below": 8, "beme": 4, "ben": 4, "ber": 7, "beta": 7, "betl": 4, "bf": 4, "bia": [4, 5, 6, 7], "bib": [], "bibliographi": [], "bibtex": [], "bigramlanguagemodel": [2, 3, 4, 5, 6, 7], "bit": 7, "ble": 6, "blee": 7, "blivard": 7, "block": [2, 3, 4, 5], "block_siz": [3, 4, 5, 6, 7], "blod": 4, "blong": 7, "blorg": 7, "bloul": 4, "blow": 7, "bnnufind": 2, "bno": 2, "bodi": 8, "boe": 4, "bofon": 3, "boliv": 6, "bon": 6, "book": 0, "both": [2, 4], "box": [], "brai": 7, "bre": 5, "break": 8, "bring": [0, 4, 5, 6, 7], "brnten": 5, "browser": 8, "bruckeng": 7, "build": 0, "built": 8, "bul": 4, "bult": 6, "bundl": [], "burs": 7, "buth": 4, "buthir": 7, "bymear": 2, "c": [2, 3, 4, 5, 6, 7], "calcul": 2, "call": [1, 2, 3], "callion": 7, "camett": 7, "can": [0, 1, 2, 5, 6, 7, 8], "cand": [6, 7], "cannot": 8, "captur": 1, "car": 8, "carobnt": 7, "cartoon": 8, "cat": [2, 3, 4, 5, 6, 7], "cavwivotxekendouz": 2, "ce": 3, "ced": 7, "cell": 8, "cend": 7, "ch": [2, 3, 4, 5, 6, 7], "chang": 4, "channal": [4, 5, 6, 7], "channel": [2, 3, 7], "char": [2, 3, 4, 5, 6, 7], "charact": [1, 2, 3, 4, 5, 6, 7, 8], "chars_str": [2, 3, 4, 5, 6, 7], "check": [], "checkpoint": 8, "chei": 7, "choos": 8, "chudmkxlvovenxm": 2, "ci": [4, 5, 6, 7], "ciak": 4, "cite": [], "cksy": 4, "cla": 7, "class": [2, 3, 4, 5, 6, 7], "clearli": 8, "cli": 8, "clip": [4, 5, 6, 7], "close": 8, "cm": [], "cmap": [], "co": [4, 5, 6, 7], "coayd": 7, "code": [0, 8], "colab": 8, "cold": [], "color": [], "com": [2, 3, 4, 5, 6, 7], "come": [4, 6, 8], "comic": 8, "command": 8, "common": 7, "commonli": 8, "commonmark": [], "commun": [6, 7], "complet": [2, 8], "complex": 1, "compon": 1, "comprehens": 1, "comput": [4, 5, 6, 7, 8], "concat": [2, 3, 4, 5, 6, 7], "concept": [1, 8], "conduct": 0, "coner": 6, "connect": [2, 3, 4, 5, 7], "conson": 4, "construct": 1, "contain": [0, 2, 4], "content": [0, 8], "context": [2, 3, 4, 5, 6, 7], "continu": [0, 8], "convert": 1, "convolut": [5, 6, 7], "coolwarm": [], "copi": 8, "corand": 7, "core": [0, 1, 7], "cork": 5, "correspond": 2, "cost": 7, "cous": 7, "cp": 8, "cpu": [2, 3, 4, 5, 6, 7], "crake": 7, "creat": [1, 2, 3, 4, 5, 6, 7, 8], "creativ": 0, "creterec": 7, "crop": [3, 4, 5, 6, 7], "cross": [2, 4], "cross_entropi": [2, 3, 4, 5, 6, 7], "crucial": 1, "cthiner": 3, "cuce": 7, "cuda": [2, 3, 4, 5, 6, 7, 8], "cuf": 2, "current": [2, 3, 4, 5, 6, 7], "custom_lin": [], "cut": 0, "cy": 5, "cycler": [], "cyedd": 4, "d": [2, 3, 4, 5, 6, 7], "dai": 0, "damperd": 6, "data": [1, 2, 3], "dataset": [1, 8], "day": 7, "de": [4, 7], "decod": [2, 3, 5, 6, 7], "decuck": 6, "def": [2, 3, 4, 5, 6, 7], "defualt": 8, "del": 4, "delet": 8, "delv": [0, 1], "demand": 0, "dens": 1, "depend": [1, 4, 8], "depth": [], "detail": 8, "deukn": 6, "develop": 1, "devic": [2, 3, 4, 5, 6, 7], "dictionari": 8, "differ": [1, 4, 5, 6, 7], "diffus": [], "diffusionpipelin": 8, "digit": 8, "digu": 5, "dim": [2, 3, 4, 5, 6, 7], "dimens": [5, 6, 7], "dimension": [2, 3, 5, 6, 7], "direct": 4, "directli": [2, 3, 4, 5, 6, 7], "directori": 8, "disable_gradi": 8, "disable_gradient_checkpoint": 8, "discad": 7, "displai": 8, "distribut": [2, 3, 4, 5, 6, 7], "dldfower": 3, "do": [7, 8], "dobqour": 7, "document": [], "doe": [], "doesn": 8, "dog": 8, "dogexampl": 8, "dollar": [], "don": 8, "dose": 7, "dosxtoutimsr": 2, "doth": 7, "douclap": 7, "dover": 7, "download": 8, "dratentert": 7, "dreambooth": 0, "dsisit": 3, "dtype": [2, 3, 4, 5, 6, 7], "due": 8, "dugheuwr": 3, "duke": 7, "dure": [0, 1], "dwar": 4, "dynam": [0, 8], "e": [2, 3, 7], "each": [1, 2, 3, 4, 5, 6, 7], "eaver": 3, "echo": 8, "ecosystem": [], "ed": 4, "edg": 0, "ee": 4, "effor": 7, "eg": 4, "eger": 5, "either": 8, "el": 7, "element": 2, "els": [2, 3, 4, 5, 6, 7], "eltannel": 6, "emb": [], "embed": [5, 6, 7], "emh": 2, "encod": [2, 3, 5, 6, 7, 8], "end": [], "engin": 0, "english": [2, 4], "enhanc": 1, "enough": 8, "ensur": 1, "entc": 0, "enter": 8, "entiti": 8, "entropi": 2, "enumer": [2, 3, 4, 5, 6, 7], "environ": [1, 8], "ep": 7, "epoch": 8, "equal": 2, "erdenn": 7, "ereerd": 3, "eri": 4, "erro": 8, "error": 8, "ert": 4, "escap": [], "esestnai": 7, "estimate_loss": [2, 3, 4, 5, 6, 7], "etc": 7, "eval": [2, 3, 4, 5, 6, 7], "eval_interv": [2, 3, 4, 5, 6, 7], "eval_it": [2, 3, 4, 5, 6, 7], "evalu": [2, 3, 4, 5, 6, 7], "everi": [2, 3, 4, 5, 6, 7], "everyon": 4, "evin": 7, "exampl": 8, "experi": 8, "explain": 1, "explor": 0, "extens": [], "extrem": 2, "f": [2, 3, 4, 5, 6, 7, 8], "fa": [5, 7], "face": 8, "fad": 2, "fai": 7, "fall": 6, "fals": [4, 5, 6, 7, 8], "falth": 7, "fard": 4, "fart": 4, "faun": 7, "featur": [3, 4, 5, 6, 7, 8], "fed": 8, "feedforward": [6, 7], "feel": 8, "feir": 7, "few": [], "ff": [6, 7], "ffort": 7, "ffwd": [5, 6, 7], "fid": 7, "field": 0, "fig": [], "figsiz": [], "file": 8, "fin": 5, "final": [7, 8], "find": 4, "finetun": 0, "first": [1, 2, 3, 4, 5, 6, 7], "fit": 7, "fix": [], "flavor": [], "fle": 5, "float": [4, 5, 6, 7], "float16": 8, "fo": [4, 7], "focu": [1, 8], "fofout": 3, "folder": 8, "follow": [0, 1, 6, 7, 8], "foot": 4, "forc": 7, "fore": 7, "form": 0, "format": 1, "formula": 8, "forveaayo": 3, "forward": [2, 3, 4, 5, 6, 7], "found": [5, 6, 7, 8], "four": [5, 7], "foush": 4, "fp16": 8, "fredt": 7, "free": 8, "freeli": 0, "french": 4, "frener": 7, "frifperend": 5, "from": [1, 2, 3, 4, 5, 6, 7, 8], "from_pretrain": 8, "frounc": 7, "full": 8, "function": [2, 3, 4, 5, 6, 7, 8], "fundament": 1, "further": 1, "futur": [0, 3], "g": [3, 4], "ga": 7, "gain": 1, "gali": 6, "gamma": 7, "gane": 5, "gar": 7, "gather": [1, 4], "geav": 7, "gener": [1, 2, 3, 4, 5, 6, 7], "generated_imag": 8, "gens": 6, "get": [2, 3, 4, 5, 6, 7], "get_batch": [2, 3, 4, 5, 6, 7], "gh": 4, "ghe": 3, "ghelofad": 2, "ghibli": 8, "github": 8, "githubusercont": [2, 3, 4, 5, 6, 7], "give": [2, 3], "given": [2, 8], "gloull": 5, "go": [], "godan": 2, "good": 8, "goucinc": 7, "govedl": 7, "gpt": 1, "gpu": 8, "gradient": 8, "gradient_accumul": 8, "graph": 4, "greg": 8, "grenid": 7, "grest": 4, "ground": 2, "group": [5, 6, 7], "guess": 2, "guid": 1, "guk": 5, "gxugto": 2, "h": [2, 3, 5, 6, 7], "ha": [2, 3, 7, 8], "hacreancad": 4, "had": 4, "hall": 7, "hallil": 4, "hamer": 6, "hand": [0, 6], "hanwin": 6, "hard": 7, "hari": 7, "hat": [5, 7], "have": [1, 4, 5, 7, 8], "havinc": 6, "he": [2, 3, 5, 6, 7], "head": 4, "head_siz": [6, 7], "heaigubusuinisou": 3, "hear": 7, "hedisor": 3, "hegpi": 7, "help": [1, 6, 7], "heme": 7, "hend": 4, "heng": 6, "henriia": 6, "her": 3, "here": [1, 2, 3, 4, 5, 6, 7, 8], "hereecas": 6, "hesoooouct": 3, "het": 4, "hi": 3, "hide": 8, "high": 4, "highest": 2, "highli": 8, "hild": 7, "hill": 5, "him": [7, 8], "hin": 6, "hirad": 5, "hofo": 3, "hold": [7, 8], "holdgraf_evidence_2014": [], "hontrt": 4, "hopci": 7, "hot": 5, "hou": [3, 7], "houxccoingmof": 2, "how": [1, 2, 3, 4, 5, 6, 7, 8], "howev": 8, "hr": 4, "hse": 4, "html": [], "http": [2, 3, 4, 5, 6, 7], "hug": 8, "huggingfac": 8, "hut": 7, "hy": 7, "hyher": 7, "hyper": 8, "i": [0, 1, 2, 3, 5, 6, 7, 8], "ibav": 2, "ic": 4, "identifi": 8, "idx": [2, 3, 4, 5, 6, 7], "idx_cond": [3, 4, 5, 6, 7], "idx_next": [2, 3, 4, 5, 6, 7], "ieee": 0, "ieth": 3, "ift": 7, "ig": [3, 7], "igess": 7, "ii": [], "il": 2, "illustr": 8, "imag": 0, "imemon": 4, "img": 8, "import": [2, 3, 4, 5, 6, 7], "impouooreldoug": 3, "improv": [1, 2], "imread": 8, "imshow": 8, "includ": [], "incomprehens": 2, "increas": 8, "ind": 5, "independ": [2, 3, 4, 5, 6, 7], "indic": [2, 3, 4, 5, 6, 7], "individu": 0, "industri": 0, "inf": [4, 5, 6, 7], "inferenc": 8, "info": 4, "inform": [1, 3, 4], "infrom": 4, "ingo": 4, "initi": 8, "inlin": [], "input": [1, 2, 3, 4, 5, 6, 7], "insert": [], "inspir": 1, "instal": 1, "instanc": 8, "instruct": 1, "int": [2, 3, 4, 5, 6, 7], "integ": [2, 3, 4, 5, 6, 7], "integr": 1, "intens": 0, "interact": [], "interest": [0, 4], "intersect": 4, "intric": 8, "introduct": 8, "ion": [], "ipynb": [], "ipynb_checkpoint": 8, "ir": 3, "is_avail": [2, 3, 4, 5, 6, 7], "isen": 4, "item": [2, 3, 4, 5, 6, 7], "iter": [2, 3, 4, 5, 6, 7], "ito": [2, 3, 4, 5, 6, 7], "its": 0, "itself": 4, "iu": 2, "ix": [2, 3, 4, 5, 6, 7], "jedi": 8, "join": [2, 3, 4, 5, 6, 7], "joth": 7, "jull": 7, "jupyt": [], "jupyterbook": [], "just": [], "jxjthsthandt": 2, "k": [2, 3, 4, 5, 6, 7], "karpathi": [1, 2, 3, 4, 5, 6, 7], "kb": [2, 3, 5, 6, 7], "ke": 3, "kear": 4, "keep": [], "kei": [4, 5, 6, 7], "keyboard": 2, "kind": [], "klit": 7, "koubofouofain": 3, "kth": 4, "kvink": 7, "l": [2, 3, 4, 5, 6, 7], "la_": [], "lambda": [2, 3, 4, 5, 6, 7], "languag": [], "lanka": 0, "lapuk": 7, "larg": 8, "last": [3, 4, 5, 6, 7], "layer": [2, 7], "lbhwz": 2, "ldour": 3, "le": [4, 7], "leal": 6, "leanven": 5, "learn": [1, 8], "learning_r": [2, 3, 4, 5, 6, 7, 8], "learvanc": 7, "leav": 6, "leeg": 7, "left": 8, "legend": [], "legnth": 2, "len": [2, 3, 4, 5, 6, 7], "length": [2, 3, 4, 5, 6, 7], "let": [1, 2], "leta": 7, "letter": 2, "level": [5, 6, 7], "lfousto": 4, "lightsab": 8, "like": [2, 5, 6, 7], "limit": 8, "line": 2, "line2d": [], "linear": [5, 6, 7], "linspac": [], "list": [2, 3, 4, 5, 6, 7], "litcc": 7, "lithr": 5, "live": [5, 7], "ll": 6, "llm": 0, "llur": 3, "lm_head": [3, 4, 5, 6, 7], "ln1": 7, "ln2": 7, "ln_final": 7, "load": [2, 8], "load_lora_weight": 8, "local": 8, "lod": 5, "lofmoaouseth": 3, "log": 2, "logit": [2, 3, 4, 5, 6, 7], "logspac": [], "loid": 7, "long": [2, 3, 4, 5, 6, 7, 8], "longer": 8, "look": [1, 2, 3, 4], "lookup": [2, 3, 4, 5, 6, 7], "lord": 7, "lose": 8, "loss": [2, 3, 4, 5, 6, 7], "lot": 7, "lothi": 7, "louc": 3, "lourd": 6, "louth": 3, "lowercas": 2, "loys": 7, "lr": [2, 3, 4, 5, 6, 7, 8], "lw": [], "lyzlccqby": 2, "m": [2, 3, 4, 5, 6, 7], "machin": 8, "mack": 7, "madi": 7, "madri": 7, "magai": 3, "mai": 7, "maith": 4, "major": [], "make": [1, 2, 8], "mal": 5, "manag": 1, "mani": [2, 3, 4, 5, 6, 7], "manual_se": [2, 3, 4, 5, 6, 7, 8], "map": [1, 2, 3, 4, 5, 6, 7], "mar": 4, "mard": 5, "markdown": [], "markedli": [], "markup": [], "mask": 4, "masked_fil": [4, 5, 6, 7], "master": [2, 3, 4, 5, 6, 7], "math": [], "matplotlib": 8, "matrix": [2, 3], "mave": 7, "max_it": [2, 3, 4, 5, 6, 7], "max_new_token": [2, 3, 4, 5, 6, 7], "maximum": [2, 3, 4, 5, 6, 7], "mb": [2, 3, 4, 5, 6, 7], "mbest": 7, "mbox": [], "md": [], "me": [4, 5, 6, 7], "mean": [1, 2, 3, 4, 5, 6, 7], "medium": [], "melentien": 7, "mem": 5, "meme": 5, "mend": 2, "mhe": 3, "mige": 6, "might": 7, "mild": 6, "mirsmi": 7, "mitcancas": 6, "mix": 8, "mixed_precis": 8, "ml": 2, "mlou": 2, "mobil": 2, "model": 1, "model_nam": 8, "modul": [2, 3, 4, 5, 6, 7], "modulelist": [5, 6, 7], "monc": 7, "mor": 6, "more": [1, 6, 7, 8], "moreov": [], "most": [], "mount": 8, "mowigr": 3, "mpimg": 8, "mrin": 5, "mrodb": 7, "msa": [6, 7], "mucha": 8, "multi": [5, 6, 7], "multiheadattent": [6, 7], "multinomi": [2, 3, 4, 5, 6, 7], "multipl": [1, 8], "must": [], "my": [6, 7], "mydriv": 8, "myfent": 7, "myill": 7, "myovr": 7, "n": [2, 3, 4, 5, 6, 7], "n_emb": [5, 6, 7], "name": 8, "nanogpt": 0, "nd": 4, "ndanv": 2, "ne": 3, "necessari": [1, 8], "need": [1, 4, 8], "neg": 8, "nett": 7, "network": [5, 6, 7], "new": [2, 3, 4, 5, 6, 7, 8], "next": [1, 2, 3, 4, 5, 6, 7], "next_word": 4, "nf": 2, "ng": 2, "nn": [2, 3, 4, 5, 6, 7], "no_grad": [2, 3, 4, 5, 6, 7], "node": 4, "noduac": 5, "none": [2, 3, 4, 5, 6, 7], "normal": [4, 5, 6, 7], "note": 7, "notebook": [0, 8], "notion": 4, "now": [7, 8], "np": [], "nuh": 6, "num": 8, "num_sampl": [2, 3, 4, 5, 6, 7], "num_step": 8, "number": [2, 5, 6, 7], "numer": [1, 4, 5, 6, 7], "numpi": [], "nurd": 7, "nwb": 2, "o": [3, 6, 7, 8], "obtain": 8, "occupi": 8, "occur": [2, 3, 4, 5, 6, 7], "oferug": 3, "off": [2, 3, 4, 5, 6, 7, 8], "ofser": 7, "oh": 7, "ok": [2, 3, 4, 5, 6, 7], "olld": 7, "olls": 7, "om": 7, "onc": [2, 3, 4, 5, 6, 7], "one": [0, 2, 6, 8], "ones": [3, 4, 5, 6, 7], "onli": [2, 4], "onto": 8, "ooner": 3, "oououeeffor": 3, "open": [2, 3, 4, 5, 6, 7], "opportun": 0, "optim": [2, 3, 4, 5, 6, 7], "ord": 7, "order": [1, 4, 8], "org": [], "origin": 8, "ork": 5, "osild": 7, "otacaeng": 4, "other": 4, "otherwis": 8, "ou": 4, "ouerketisi": 3, "oull": 7, "oulu": 2, "ouowther": 3, "our": [1, 7, 8], "ourorar": 2, "out": [2, 3, 4, 5, 6, 7, 8], "out_int": [2, 3, 4, 5, 6, 7], "output": [1, 2, 3, 5, 6, 7], "overview": [], "ow": 4, "owhaisoo": 3, "own": 1, "p": 4, "packag": 8, "page": [], "painllo": 3, "paint": 8, "paper": 8, "parallel": [2, 3, 4, 5, 6, 7], "paramet": [2, 3, 4, 5, 6, 7, 8], "parameter": 8, "parl": 7, "parris": 4, "part": 1, "particular": [], "past": [2, 3, 4], "past_word": 4, "pat": 4, "path": [7, 8], "paustiu": 7, "pe": 4, "per": [2, 3, 5, 6, 7], "perform": 1, "perper": 7, "pether": 7, "phase": 1, "photo": 8, "pip": 8, "pipe": 8, "place": 4, "plai": 2, "plain": [2, 3, 4, 5, 6, 7], "pleas": 0, "plot": 8, "plt": 8, "png": 8, "pod": 7, "pof": 5, "pos_emb": [3, 4, 5, 6, 7], "pose": 8, "posit": 4, "position_embedding_t": [3, 4, 5, 6, 7], "possibl": [2, 3, 4, 5, 6, 7], "post": [], "postion": 4, "potenti": 0, "power": [], "prat": 7, "pre": 1, "precis": 8, "predict": [2, 3, 4, 5, 6, 7], "prepar": 1, "present": 4, "prev_word": 4, "prevent": [4, 5, 6, 7], "principl": 0, "print": [2, 3, 4, 5, 6, 7], "privat": 4, "prj_path": 8, "prob": [2, 3, 4, 5, 6, 7], "probabl": 2, "probod": 7, "proce": 8, "process": [1, 2, 3, 4, 5, 6, 7], "project": [1, 8], "project_nam": 8, "prop_cycl": [], "properli": [], "protag": 7, "provid": [0, 4], "prrosti": 7, "publish": 8, "punctuat": 2, "purchas": 8, "pure": 2, "purpos": [], "pyplot": 8, "python": [1, 8], "pytorch": [1, 8], "pytorch_lora_weight": 8, "q": [4, 5, 6, 7], "qualiti": 8, "queri": [4, 5, 6, 7], "qulf": 7, "r": [2, 3, 4, 5, 6, 7, 8], "race": 8, "rach": 6, "ram": 8, "randint": [2, 3, 4, 5, 6, 7], "randn": [], "random": 2, "rang": [2, 3, 4, 5, 6, 7], "rast": 7, "rate": 8, "raw": [2, 3, 4, 5, 6, 7], "rcparam": [], "read": [2, 3, 4, 5, 6, 7], "realm": 0, "recogn": 1, "recos": 7, "reduc": 2, "refer": 1, "refined_imag": 8, "regard": 0, "register_buff": [4, 5, 6, 7], "regular": [], "relev": 1, "relu": [5, 6, 7], "rememb": 8, "renco": 7, "render": [], "replac": [4, 5, 6, 7], "repositori": 8, "reproduc": [], "request": [2, 3, 4, 5, 6, 7], "resembl": 2, "residu": 7, "resolut": 8, "resolv": [2, 3, 4, 5, 6, 7], "resourc": 8, "respons": [2, 3, 4, 5, 6, 7], "rest": [2, 3, 4, 5, 6, 7], "restart": 8, "ret": 7, "return": [2, 3, 4, 5, 6, 7], "ri": 2, "ride": 8, "riethord": 6, "rif": 7, "rise": 0, "rmdir": 8, "rnn": [2, 3, 4, 5, 6, 7], "rould": 7, "round": 7, "row": 2, "rrvirtr": 2, "run": 8, "runtim": 8, "rust": 7, "rutkowski": 8, "ry": 5, "sa": [6, 7], "sa_head": 4, "safetensor": 8, "sai": [2, 7], "sak": 5, "same": [], "sampl": [2, 3, 4, 5, 6, 7], "sater": 7, "save": [2, 3, 4, 5, 6, 7], "sbe": 3, "sbjnmnwwp": 2, "sc": 2, "scale": [4, 5, 6, 7], "scaradmi": 7, "scausnal": 6, "score": [4, 5, 6, 7], "scratch": 1, "script": 8, "sdxl": 0, "se": [3, 7], "search": 4, "searsw": 6, "section": [0, 1], "sed": 7, "see": [1, 2, 8], "seecest": 7, "seed": [2, 3, 4, 5, 6, 7, 8], "seel": 7, "seintl": 7, "select": 8, "self": [2, 3, 5, 6, 7], "sellow": 7, "semant": 1, "send": 8, "sens": 1, "sent": [2, 3, 4, 5, 6, 7], "sentiment": 4, "sequenc": [1, 2, 3, 4, 5, 6, 7], "sequenti": [5, 6, 7], "serbeai": 4, "serv": [], "sescal": 7, "set": [1, 2, 3, 4, 5, 6, 7], "set_to_non": [2, 3, 4, 5, 6, 7], "setolf": 5, "sever": 1, "shakespear": [1, 2], "shall": 7, "shape": [2, 3, 4, 5, 6, 7], "sharp": 8, "shat": 5, "sher": 6, "shew": 7, "shink": 7, "shith": 6, "short": 2, "shorvan": 7, "shou": 4, "should": 8, "shoull": 6, "show": 8, "sighit": 7, "sight": 2, "sign": [], "similar": 0, "simpl": [1, 2], "simplest": 2, "simpli": 2, "simplifi": 1, "sinc": [1, 2], "singl": 2, "sisimanereagcad": 2, "sit": 5, "size": [2, 3, 4, 8], "sk": 8, "skill": 0, "skillsurf": 8, "skillsurfgenai": [], "slide": 0, "slight": [], "small": [1, 2, 3, 4, 5, 6, 7], "smaller": [1, 7], "sme": 7, "smooth": 8, "so": [0, 4, 5, 6, 7, 8], "softmax": [2, 3, 5, 6, 7], "some": [], "sometim": 8, "somewhat": 2, "son": [5, 7], "sond": 7, "song": [5, 6], "sor": 7, "sord": 7, "sore": 7, "sort": [2, 3, 4, 5, 6, 7], "soucnsew": 6, "sourg": 6, "sout": 5, "space": [4, 8], "span": [], "spark": 0, "special": [], "specif": 8, "sphinx": [], "split": [2, 3, 4, 5, 6, 7], "sposs": 7, "sqrt": 7, "squar": 8, "sri": 0, "st": 7, "stabilityai": 8, "stablediffusionxlimg2imgpipelin": 8, "stack": [2, 3, 4, 5, 6, 7], "stai": 7, "stake": 7, "stand": [], "star": 8, "start": [2, 3, 4, 5, 6, 7, 8], "starter": [], "state": [], "step": [1, 2, 3, 4, 5, 6, 7, 8], "steri": 7, "sthe": 3, "sto": 7, "stoe": 7, "stoi": [2, 3, 4, 5, 6, 7], "store": 4, "str": 8, "strese": 7, "string": [2, 3, 4, 5, 6, 7], "strot": 7, "structur": [], "strver": 7, "studio": 8, "style": 8, "su": 3, "subplot": [], "sue": 7, "suir": 7, "suitabl": 1, "sul": 7, "sum": 4, "super": [2, 3, 4, 5, 6, 7], "sur": 7, "sure": [], "surf": 0, "svy": 2, "sy": 4, "symbol": 2, "syntax": [], "t": [2, 3, 5, 6, 7, 8], "t_i": 2, "tabl": [1, 3, 4, 5, 6, 7], "tadbrengotonol": 2, "tailor": 0, "take": [2, 3, 4, 5, 6, 7], "tame": 7, "tandl": 7, "target": [2, 3, 4, 5, 6, 7], "te": 5, "tell": 7, "ten": [4, 7], "tensor": [2, 3, 4, 5, 6, 7], "tepefur": 5, "test": [2, 3, 4, 5, 6, 7, 8], "teti": 7, "teven": 4, "tex": [], "text": [1, 2, 3, 4, 5, 6, 7, 8], "th": [2, 4], "thagi": 2, "than": 7, "thand": 5, "tharr": 5, "thaw": 5, "thed": 3, "thee": 7, "thei": [1, 5, 6, 7, 8], "them": [1, 6], "ther": [5, 7], "thethen": 4, "thhe": [2, 7], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8], "think": [5, 6, 7], "this_word": 4, "thore": 7, "thornearppack": 7, "those": 4, "though": 7, "thourdes": 7, "thout": 7, "through": [0, 1, 8], "throw": 8, "thumbnail": 8, "thuwn": 7, "thy": 5, "ti": [5, 6], "tidto": 7, "time": [2, 3, 4, 5, 6, 7, 8], "tingisof": 2, "tini": [1, 2], "tinyshakespear": [2, 3, 4, 5, 6, 7], "tir": 5, "tisal": 4, "tnate": 7, "togeth": [0, 1, 3, 8], "toitoulpqp": 2, "tok_emb": [3, 4, 5, 6, 7], "token": [5, 6, 7, 8], "token_embedding_t": [2, 3, 4, 5, 6, 7], "tolf": 5, "tolist": [2, 3, 4, 5, 6, 7], "tome": 7, "too": 2, "tool": 1, "topic": [], "torch": [2, 3, 4, 5, 6, 7, 8], "torch_dtyp": 8, "tot": [5, 7], "toui": 3, "tout": 3, "towem": 3, "train": 0, "train_data": [2, 3, 4, 5, 6, 7], "train_text_encod": 8, "trainabl": [2, 3], "tramand": 7, "transform": [0, 1], "translat": 4, "transpos": [4, 5, 6, 7], "traunt": 7, "trfzgngoufmkhxkj": 2, "triangular": [4, 5, 6, 7], "tril": [4, 5, 6, 7], "triow": 7, "true": [2, 3, 4, 5, 6, 7, 8], "truselinc": 7, "truth": 2, "try": 8, "tt": [2, 3], "tugolouc": 3, "tutori": 1, "twat": 7, "two": [3, 4], "txt": [2, 3, 4, 5, 6, 7], "ty": 5, "type": [], "u": [3, 4, 8], "ucaver": 4, "ugdath": 2, "uhd": 8, "ulith": 5, "uls": 6, "uni": 7, "uniqu": [1, 2, 3, 4, 5, 6, 7, 8], "unit": 8, "unnecessari": 8, "unravel": 0, "until": 8, "up": 1, "updat": 8, "upiord": 5, "upload": 8, "upper": [4, 5, 6, 7], "uppercas": 2, "upscal": 8, "upto": 4, "ur": 7, "us": [0, 1], "use_8bit_adam": 8, "use_xform": 8, "uself": 7, "ust": 7, "utf": [2, 3, 4, 5, 6, 7], "v": [5, 6, 7], "val": [2, 3, 4, 5, 6, 7], "val_data": [2, 3, 4, 5, 6, 7], "valu": [1, 2, 4, 5, 6, 7], "variabl": 8, "varianc": [4, 5, 6, 7], "variant": 1, "variat": [], "vdugo": 7, "ve": 2, "vector": [1, 2, 3, 4, 5, 6, 7], "veri": [1, 4], "version": [1, 8], "vex": 5, "vi": 6, "view": [2, 3, 4, 5, 6, 7, 8], "visit": 8, "vocab_s": [2, 3, 4, 5, 6, 7], "vocabulari": [1, 3, 4, 5, 6, 7], "vowel": 4, "vzyog": 2, "v\u03c3": 4, "w": [3, 4], "wa": 8, "wake": 7, "wald": 4, "walk": 1, "wall": 6, "want": 8, "war": [7, 8], "wat": 7, "we": [0, 1, 2, 3, 4, 5, 6, 7, 8], "weancept": 5, "websit": 1, "wei": [4, 5, 6, 7], "weight": [2, 3, 4, 5, 6, 7], "weight_nam": 8, "well": [], "welll": 7, "wenowisoat": 3, "wer": 3, "were": 7, "weri": 6, "werrectan": 7, "west": 7, "wget": [2, 3, 4, 5, 6, 7], "wh": 4, "whari": 7, "what": [2, 3, 4, 5, 6, 7], "whe": 5, "when": [2, 8], "where": [2, 7], "wherea": [], "whether": [], "which": [1, 2, 8], "while": [2, 3, 4, 5, 6, 7], "whim": 6, "whorend": 5, "why": 6, "wich": 7, "wikist": 7, "willing": 4, "willl": 5, "window": [2, 3], "wio": 7, "wirw": 7, "wish": 7, "witgh": 7, "without": [7, 8], "wllld": 5, "wlond": 7, "wloubi": 4, "wo": 4, "woall": 7, "wof": 7, "wor": 4, "word": [4, 8], "words_befor": 4, "work": [1, 8], "workshop": 8, "workspac": 8, "worth": 7, "woth": 5, "woto": 4, "wouc": 5, "woull": 7, "wousk": 4, "write": 8, "written": [], "wte": 4, "wull": 7, "x": [2, 3, 4, 5, 6, 7], "x_skip": 7, "xb": [2, 3, 4, 5, 6, 7], "xformer": 8, "xl": 8, "y": [2, 3, 4, 5, 6, 7], "y_i": 2, "yald": 5, "yarg": 7, "yb": [2, 3, 4, 5, 6, 7], "ybre": 2, "ychxrelo": 2, "yea": 6, "yene": 2, "yoth": 7, "you": [0, 1, 6, 7, 8], "yought": 5, "your": [0, 1, 6, 7], "yourd": 7, "yourdss": 7, "yourshou": 7, "youu": 6, "ypcxfbyfofineqbmu": 2, "yshore": 4, "yvndineuzrierglo": 2, "zero": [2, 3, 4, 5, 6, 7], "zero_grad": [2, 3, 4, 5, 6, 7], "zgu": 2, "zinnot": 7, "ztgmno": 2, "\u03c3": 2}, "titles": ["Welcome to Introduction to Generative AI Workshop", "Introduction to Building nanoGPT", "Bigram Model", "Bigram Model with Linear layer &amp; Token + Positional embeddings", "Self Attention", "Multiple Heads, Feedforward Layer", "Residual Connections, Transformer Block", "Projection, Layernorm, Dropout", "Finetuning SDXL DreamBooth using AutoTrain"], "titleterms": {"01": 0, "02": 0, "1": 8, "2": 8, "ad": 1, "ai": 0, "attent": [1, 4, 5], "autotrain": 8, "basic": [], "bigram": [2, 3], "block": [6, 7], "book": [], "build": [1, 8], "citat": [], "code": [], "commun": 4, "connect": 6, "content": [], "data": [4, 5, 6, 7], "dataset": [2, 3], "decod": 4, "diffus": 8, "direct": [], "dreambooth": 8, "drive": 8, "dropout": 7, "embed": [1, 2, 3, 4], "encod": [1, 4], "engin": [], "evalu": 1, "feedback": 0, "feedforward": [1, 5], "finetun": 8, "gener": [0, 8], "get": 1, "googl": 8, "h": 4, "head": [1, 5, 6, 7], "hyperparamet": [2, 3, 4, 5, 6, 7], "i": 4, "imag": 8, "implement": 1, "import": 8, "infer": [2, 3, 5, 6, 7], "instal": 8, "introduc": 1, "introduct": [0, 1], "jupyt": [], "layer": [1, 3, 5], "layernorm": 7, "learn": [], "limit": 2, "linear": [3, 4], "link": 8, "load": 5, "markdown": [], "mechan": [1, 4], "mhsa": [6, 7], "model": [2, 3, 4, 5, 6, 7, 8], "modul": 8, "more": [], "multi": 1, "multipl": 5, "myst": [], "nanogpt": 1, "network": 1, "neural": 1, "next": 8, "notebook": [], "option": 8, "output": 4, "own": 8, "part": 8, "pipelin": 8, "po": [3, 4], "posit": [1, 3], "pre": 8, "project": 7, "prompt": 8, "qk": 4, "refer": 8, "refin": 8, "residu": 6, "result": 2, "role": [], "sampl": [], "save": 8, "sdxl": 8, "self": [1, 4], "session": [0, 8], "set": 8, "softmax": 4, "sqrt": 4, "stabl": 8, "start": 1, "t": 4, "tabl": 2, "token": [1, 2, 3, 4], "train": [1, 2, 3, 4, 5, 6, 7, 8], "transform": [6, 7], "understand": 1, "up": 8, "us": 8, "v": 4, "vocabulari": 2, "weight": 8, "welcom": 0, "what": 8, "workshop": 0, "your": 8}})