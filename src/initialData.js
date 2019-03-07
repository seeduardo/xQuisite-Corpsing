import React from 'react';

const imgUrlRoot = '/xQuisite-Corpsing-FrontEnd/organAndFloatingManImages/'

const initialData = [
  {
    id: 1,
    organ: "brain",
    title: "Headquartered in the Nerve Centre",
    image: `${imgUrlRoot + 'Brain.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Brain_tn.jpg'}`,
    quotation: "'It is certainly now common knowledge that the brain, even although a physical organ, bears some intimate relation to the mind; and this knowledge is manifestly embodied in common idiom. When referring to admittedly mental happenings or conditions we speak of racking one’s brains, picking another’s brains, having it on the brain, having a good brain or, contrariwise, being all brawn and no brain; and so on.' - CV Borst",
    top: 7.5,
    left: 52.3,
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'Walt Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas. Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content:
        <p>
        The brain is wider than the sky,<br/>
          For, put them side by side,<br/>
        The one the other will include<br/>
          With ease, and you beside.<br/><br/>

        The brain is deeper than the sea,<br/>
          For, hold them, blue to blue,<br/>
        The one the other will absorb,<br/>
          As sponges, buckets do.<br/><br/>

        The brain is just the weight of God,<br/>
          For, lift them, pound for pound,<br/>
        And they will differ, if they do,<br/>
          As syllable from sound.<br/><br/>

                            Emily Dickinson
        </p>
      },
    ]
  },
  {
    id: 2,
    organ: "hand",
    title: "Manoeuvre, Manufacture, Manipulate",
    image: `${imgUrlRoot + 'Hand.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Hand_tn.jpg'}`,
    quotation: "'Possession of a fully developed hand profoundly transformed the relationship of the human being to its own body, thus altering the relationship between humans and the natural world. The interaction of the hand with the rest of the body brought about self-consciousness and laid the foundations for the unique sense of agency that is experienced by humans.' -  Raymond Tallis",
    top: 46,
    left: 75.9,
    tabs: [
      {name: "The Body Politic", content: `'"All hands on deck" is what a skipper calls for when all his/her crew are required aboard to help manoeuvring the ship. It means that everybody has to join forces to overcome navigational difficulties: "All hands on deck" means "collective action". This book is about collective action; not aboard a ship, but in the management of the coastal waters. Growing demands for entry to the coastal waters by a variety of uses, such as fisheries, aquaculture, shipping, recreation and nature conservation, have resulted in a number of problems, including resource degradation and conflicts. The presence of a range of management regimes to co-ordinate different claims has not prevented these problems from occurring. Increasingly, stakeholders all over the world are realising that to deal with such problems all hands are needed on deck.' - Nathalie A Steins`},
      {name: "Out of Body Experience", content: `'Each morning begins with a ritual dash through our own private obstacle course - objects to be opened or closed, lifted or pushed, twisted or turned, pulled, twiddled, or tied, and some sort of breakfast to be peeled or unwrapped, toasted, brewed, boiled, or fried. The hands move so ably over this terrain that we think nothing of the accomplishment. Whatever your own particular early-morning routine happens to be, it is nothing short of a virtuoso display of highly choreographed manual skill.' - Frank R Wilson`},
      {name: "Corpus Delicti", content:`'I thought I might need to know Blackford's hand and I set out to learn it. Not in a day, monsieur, nor a week, like your common forger, and with an untried hand - but in a year, and years - with a hand that obeys me, I went over and over every letter of every word until I could write the man's hand, not an imitation of it, monsieur, not that, but the very hand itself - the very hand that Blackford writes with his own fingers. And it was well, for I was able to get the child all that Blackford had, beyond his debts, by a letter that no man could know that Blackford did not write.' - Melville Davisson Post`},
      {name: "Foreign Body", content: `'Il était un peu plus de midi et nous efforcions tous les trois de trouver le sommeil. La dernière chose dont je me souvienne, c'est de la main de Mona, sur le parquet, entre no deux matelas. Cette main-là, dans mon demi-sommeil, prenait une signification inouïe. Pendant tout un temps, je me suis demandé si j'allais oser avancer ma main pour la toucher comme par inadvertance.' - Georges Simenon`},
      {name: "The Body Text", content:
        <p>
          Keep me like a jewel<br/>
          I'm the only one<br/>
          Curled around your finger<br/>
          The only one<br/><br/>

          And hold me in your hand<br/>
          I'm the only one<br/>
          I'm lit up like a candle<br/>
          The only one<br/><br/>

                      American Analog Set
        </p>
      },
    ]
  },
  {
    id: 3,
    organ: "gut",
    title: "A Hunger and an Instinct",
    image: `${imgUrlRoot + 'Gut.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Gut_tn.jpg'}`,
    quotation: `'Embedded in the expression "gut feeling" is the notion that the gut is the first part of the body to respond to the environment, producing an emotional sixth sense that governs rational thought processes. This concept is not so foreign to our current physiological models in which the intestinal tract from mouth to anus is described as an exterior organ that mediates between the outside world and the internal viscera, with the intestinal epithelium providing an immunological gateway between self and other.' - M Mathias and AM Moore`,
    top: 38,
    left: 42,
    tabs: [
      {name: "The Body Politic", content: `'The message conveyed by this historical narrative is one that can be described using the aphorism “No Guts, No Glory”, popularized by US Air Force general Frederick C Bless in his book carrying this title, or the expression “No Pain, No Gain”, which is now used in various circles to convey the idea that those who want progress should be prepared to make sacrifices and endure suffering . It is in this way, in the name of being tough enough to restore the nation’s old glory and/or natural supremacy that Populist Right-Wing Party leaders seek to promote an alternative state symbology, and justify their calls for harsher immigration and asylum policies.' - Frank Mols and Jolanda Jetten`},
      {name: "Out of Body Experience", content: `'I am quite a wise old bird, but I am no desert hermit who can only prophesy when his guts are knotted with hunger. I am deep in the old man's puzzle, trying to link the wisdom of the body with the wisdom of the spirit until the two are one. At my age you cannot divide spirit from body without anguish and destruction, from which you will speak nothing but crazy lies.' - Robertson Davies`},
      {name: "Corpus Delicti", content:`'He disappeared into the shadows and reappeared holding a lancet that he delicately inserted into the corpse's mouth. They were all leaning over the body and all distinctly heard the instrument make a metallic, clinking sound. The doctor persisted in his task for some time. When he removed the tweezers he had succeeded in collecting a sample of a grey-back substance that he raised above his head. "This man has a lead stomach. He was killed, tortured, slaughtered even... He was made to swallow molten lead, which burnt up his insides, made hi head shrink and destroyed his entrails."' - Jean-François Parot`},
      {name: "Foreign Body", content: `'Me han clavado un puñal largo y frío en el éstomago hay alguien, hay otro que me ha clavado un acero en las entrañas: huelo ese incienso y estoy cansado. Yo dejo que hagan. Que me levanten pesadamente, mientras gimo. No les debo la vida a ustedes. No puedo, no puedo, no elegí, el dolor me dobla la cintura.' - Carlos Fuentes`},
      {name: "The Body Text", content:
        <p>
          I had not vomited in so long<br/>
          Someone put the hex on my true-to-selfness<br/>
          Some sorcerer kept me far from my guts<br/>
          The guts I feared would choke me<br/><br/>
          And make me ashamed of having no wings<br/>
          And drown my own heart<br/>
          I know how to survive a feeling<br/>
          But I forgot that I knew it<br/>
          A manic forgetter froze my meats<br/>
          I kept asking for help when I didn't need it<br/>
          My demons stared out from the ice<br/>
          When they finally thawed they'd been dead all along<br/>
          And now I am the walking thawed<br/>
          You survive yourself if you wait long enough<br/>
          And vomit your guts down your defrosted breast<br/>
          And bathe in your mess and say baby it's fine<br/><br/>

                            Melissa Broder
        </p>
      },
    ]
  },
  {
    id: 4,
    organ: "arm",
    title: "Embrace Weaponization",
    image: `${imgUrlRoot + 'Arm.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Arm_tn.jpg'}`,
    quotation:
      <p>
       This world is ruled<br/>
       By demented old men<br/>
       Shaking hands all day long<br/>
       But what they do is breeding hate<br/>
       We've got to stop them<br/>
       Before it's too late<br/>
       Stop the arms race<br/>
       Not the human race<br/><br/>

          Balthasar Gerards Kommando
      </p>,
    top: 32.9,
    left: 61.5,
    tabs: [
      {name: "The Body Politic", content: `'Sidney, Trenchard, and a host of other radical Whig essayists shared with Harrington the idea that arms were "the only true badges of liberty." In "a popular or mixed Government," wrote Sidney, "the body of the People is the publick defence, and every man is arm'd and disciplin'd." No nation was secure except by relying on the military strength of its own people. Nevertheless, freedom did not depend on the armed individual. Arms guaranteed liberty only through the organization and discipline provided by the militia.' - Lawrence Delbert Cress`},
      {name: "Out of Body Experience", content: `'Excluding those taken in mirrors - a distinct subset of this universe - selfies are nearly always taken from within an arm’s length of the subject. For this reason the cropping and composition of selfies are very different from those of all preceding self-portraiture. There is the near constant visual presence of one of the photographer’s arms, typically the one holding the camera. Bad camera angles predominate, as the subject is nearly always off-center. The wide-angle lens on most cell phone cameras exaggerates the depth of noses and chins, and the arm holding the camera often looks huge.' - Jerry Saltz`},
      {name: "Corpus Delicti", content:`'All this Charmian blamed upon Mrs Pettigrew, forgetting for the moment that her past tormentor had been Lisa; so bitter was the particular memory and so vicious was her new tormentor. For Mrs Pettigrew had wrenched Charmian's arm while getting her dress off, had possibly bruised the arm with her hard impatient grasp. "What you need," Mrs Pettigrew had said, "is a nurse. I am not a nurse." Charmian felt indignant at the suggestion that she needed a nurse.' - Muriel Spark`},
      {name: "Foreign Body", content: `'Anabel, que había estado escuchando la conversación, abrió los ojos y movió la cabeza hacia ambos lados. Quiso levantar el brazo que tenía en el suero, pero Tania se lo impidió. -No muevas ese brazo, mi niña, que tienes puesto el suero -dijo Tania mientras le acomodaba el brazo al costado del cuerpo. Nuria miró a Anabel con desconfianza.' - Omar Magrini`},
      {name: "The Body Text", content:
        <p>
          This arm. It lies on the table like an old musical instrument or a<br/>
            dishmop, smoking a cigarette this time. I'm glad it is here but<br/>
            the question is, what shall I use it for?<br/>
          It will express my will, or my whim, as words will; it's free.<br/>
          I say something or my arm does something.<br/><br/>

                              Michael Benedikt
        </p>
      },
    ]
  },
  {
    id: 5,
    organ: "eye",
    title: "Foresighted Blindness to a Panopticism",
    image: `${imgUrlRoot + 'Eye.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Eye_tn.jpg'}`,
    quotation: `'The eye responds only to changes, to borders between light and dark. To create meaning from what it sees, indeed, for there to be vision at all, the eye needs borders, differences that distinguish one object from another. Fresh from the lab, I learned the same lesson in an introductory course on literary theory. When defining something, we typically compare it to something similar and then, like the eye, focus on the way it differs from the concepts most closely related to it. Like our visual system, we create meaning only through the differences we perceive and the boundaries we believe are present.' - Laura Otis`,
    top: 4.3,
    left: 47.8,
    tabs: [
      {name: "The Body Politic", content: `'The world is thereby left with Foucault’s conceptualisation of the panopticon as the eye-of-power/the eye-of-authority/the new-power-of-universal-surveillance which inhabits each and every institutional setting. But by Foucault’s account, the power that operated each discipline’s gaze is not merely metaphysical: it is an everyday of-the-world matter of individual and collective human practice.' - Keith Hollinshead`},
      {name: "Out of Body Experience", content: `'What goes on in the "mind's eye?" Why can certain kinds of stimuli be more readily recalled? Why do certain mnemonics work? Why do certain classes of recall and performance tasks interfere or result in systematic confusions? The why in each of these questions could not, be approached until the image metaphor is replaced by a fine detail information-processing model whose relation to the experience of imagery, by the way, is really quite a secondary matter. It is, in fact, significant that in this more formal model the experience of imaging has no causal role. It remains, at most, a source of ideas suggesting what processes might be required in the model.' - Zenon W Pylyshyn`},
      {name: "Corpus Delicti", content:`'It had a profile like an eagle and its wide round eye was a camera lens. The lens was aimed at the naked girl in the chair. There was a blackened flash bulb clipped to the side of the totem pole. Geiger was wearing Chinese slippers with thick felt soles, and his legs were in black satin pyjamas and the upper part of him wore a Chinese embroidered coat, the front of which was mostly blood. His glass eye shone brightly up at me and was by far the most lifelike thing about him. At a glance none of the three shots I heard had missed. He was very dead.' - Raymond Chandler`},
      {name: "Foreign Body", content: `'Suplico que vuestra merced sea servido de mostrarnos algún retrato de esa señora, aunque sea tamaño como un grano de trigo; que por hilo se sacará el ovillo, y quedaremos con esto satisfechos y seguros, y vuestra merced quedará contento y pagado; y aun creo que estamos ya tan de tu parte que, aunque su retrato nos muestre que es tuerta de un ojo y que del otro mana bermellón y piedra azufre, con todo eso, por complacer a vuestra merced, diremos en su favor todo lo que quisiere.' - Miguel de Cervantes Saavedra`},
      {name: "The Body Text", content:
        <p>
          It was a long day:<br/>
          Deborah waiting for the blood vessels<br/>
          painted<br/>
          on her iris to dry.<br/>
          Her mother said that, holding Deborah<br/>
          when she was born,<br/>
          "First I inspected her, from toes to navel,<br/>
          then stopped at her head..."<br/>
          We wondered why<br/>
          the inspection hadn’t gone the other way.<br/>
          "Looking into her eye<br/>
          was like looking into a volcano."<br/><br/>

                            Carolyn Kizer
        </p>
      },
    ]
  },
  {
    id: 6,
    organ: "foot",
    title: "Tread Lightly, Wanderer",
    image: `${imgUrlRoot + 'Foot.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Foot_tn.jpg'}`,
    quotation: `'The writer of the Derveni Papyrus cites some phrases from Heraclitus’s work; in particular, he cites the following: "the Sun according to nature has the width of a human foot, not over-stepping his measures; if he does, the Erinyes, the minions of Justice, will find him." It is a pity that the papyrus was significantly destroyed; thus it is difficult to read it and be sure about the meaning of the saved words. Of those lines that were saved, it reads: "sacrifice… of justice"; or, in another rendering: "it will be an overstepping of justice”. In either case we could raise the following question: what would happen, if the Sun overstepped its measures?' - Theodoros Christidis`,
    top: 83,
    left: 49,
    tabs: [
      {name: "The Body Politic", content: `'First, we find that
estimating the average effect of an increase in environmental costs over all trade flows understates
the effect of environmental regulations on trade with low-income or low-standard countries.
Second, we find that estimating the average effect of an increase in environmental costs over all
industries understates the effect that regulatory stringency has on trade within the geographically
mobile (i.e., footloose) industries. Importantly, polluting industries also appear to be relatively
immobile.' - Josh Ederington, Arik Levinson and Jenny Minier`},
      {name: "Out of Body Experience", content: `'"I was unhappy because I had no shoes until I met a man with no feet." The Watchmen exchanged glances. "What?" said Vimes, very carefully. "People like it if I occasionally come up with a little aphorism or inspiring Thought For The Day," said the imp. "So how did you meet this man with no feet?" said Vimes. "I didn't actually meet him," said the imp. "It was a general metaphorical statement." " Well, that's it, then," said Vimes. "If you'd met him you could have asked him if he had any boots he didn't have any use for."' - Terry Pratchett`},
      {name: "Corpus Delicti", content:`'Hold on to the real tragedy at the heart of the farce, I thought briefly, and walked over to the water trough to look at the foot that lay behind it. There were horse-feed nuts scattered everywhere around. Without expecting much emotion, I bent and picked the foot up. I hadn't seen the other severed feet. I'd actually thought some of the reported reactions excessive. But the reality of that poor, unexpected, curiously lonely lump of bone, gristle and torn ends of blood vessels, that wasted miracle of anatomical elegance, moved me close to the fury and grief of the owners.' - Dick Francis`},
      {name: "Foreign Body", content: `'Eran casi siempre cuerpos esqueléticos, amarillos, como momias. Al dar en la piedra hacían un ruido desagradable, extraño, como de algo sin elasticidad que se derrama; luego, los mozos iban cogiendo los muertos, uno a uno, por los pies y arrastrándolos por el suelo, y al pasar unas escaleras que había para bajar a un patio donde estaba el depósito de la sala, las cabezas iban dando lúgubremente en los escalones de piedra.' - Pío Baroja`},
      {name: "The Body Text", content:
        <p>
          It is appropriate that I sing<br/>
          The song of the feet<br/><br/>

          The weight of the body<br/>
          And what the body chooses to bear<br/>
          Fall on me<br/><br/>

          I trampled the American wilderness<br/>
          Forged frontier trails<br/>
          Outran the mob in Tulsa<br/>
          Got caught in Philadelphia<br/><br/>

          And am still unreparated<br/><br/>

          I wiggle my toes<br/>
          In the sands of time<br/>
          Trusting the touch that controls my motion<br/>
          Basking in the warmth of the embrace<br/>
          Day’s end offers with warm salty water<br/><br/>

                            Nikki Giovanni
        </p>
      },
    ]
  },
  {
    id: 7,
    organ: "heart",
    title: "Core Zone Fluid Mechanics",
    image: `${imgUrlRoot + 'Heart.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Heart_tn.jpg'}`,
    quotation: `'Almost immediately, he dreamt of a beating heart. He dreamt it as active, warm, secret, the size of a closed fist, of garnet color in the penumbra of a human body as yet without face or sex; with minute love he dreamt it, for fourteen lucid nights. Each night he perceived it with greater clarity. He did not touch it, but limited himself to witnessing it, observing it, perhaps correcting it with his eyes. He perceived it, lived it, from many distances and many angles. On the fourteenth night he touched the pulmonary artery with his finger, and then the whole heart, inside and out. The examination satisfied him. Deliberately, he did not dream for a night; then he took the heart again, invoked the name of a planet and set about to envision another of the principal organs.' - Jorge Luis Borges`,
    top: 24.5,
    left: 42.6,
    tabs: [
      {name: "The Body Politic", content: `'Understanding why the political heart of Information Literacy was lost reveals biases in the systems used to organise the production and consumption of information in society, including the educational system. These systems are based on a particular notion of authority; that it is centralised, exclusionary and unitary, instead of distributed, participatory and polyvocal (many-voiced).' - Andrew Whitworth`},
      {name: "Out of Body Experience", content: `'I saw this divine Heart as on a throne of flames, more brilliant than
the sun and transparent as crystal. It had Its adorable wound and
was encircled with a crown of thorns, which signified the pricks
our sins caused Him. It was surmounted by a cross which signified
that, from the first moment of His Incarnation, that is, from the
time this Sacred Heart was formed, the cross was planted in It.' - Margaret Mary Alacoque`},
      {name: "Corpus Delicti", content:`'It was not busy in the sandwich bar, so I sat there for another fifteen minutes. I thought about the heart. Who could it belong to? The original person was probably dead, the person born with that heart, but there was a very small chance they might have had a transplant and still be alive with someone else's heart in their chest. Maybe they had thrown the old heart from the train to say goodbye to it for ever. If so, it was a very poetic gesture. I did not feel disgust.' - Toby Litt`},
      {name: "Foreign Body", content: `'O coração. Não o coração no meio de frases que circulam sem correr riscos pelos cruzamentos e se deixam traduzir em todas as línguas. Não o coração dos arquivos cardiográficos,
simplesmente, objeto de conhecimentos ou de técnicas, de filosofias e de discursos bio-éticojurídicos. Não o coração das Escrituras ou de Pascal, provavelmente, nem mesmo, o que é
ainda menos evidente, aquele que Heidegger prefere ver em seu lugar. Não, lima história de
"coração", poeticamente envolta no idioma "aprender de cor", este da minha língua ou de uma
outra, a inglesa (to learn lry heart), ou ainda de uma outra, a árabe (hafiza a'n zahrzkalb) - um
único trajeto de múltiplas vias' - Jacques Derrida`},
      {name: "The Body Text", content:
        <p>
          Works of heart bleeding dark<br/>
          Black, magniloquent art<br/>
          Monotonous palate<br/>
          Murky spectrum<br/>
          Grimly unlimited<br/>
          Prolific food for thought<br/>
          Contrasting, fed with force<br/>
          Abstraction, so choking<br/>
          So provocative<br/><br/>

          Bleeding works of art<br/>
          Seething work so dark<br/>
          Seering words from the heart<br/><br/>

                                Carcass
        </p>
      },
    ]
  },
  {
    id: 8,
    organ: "leg",
    title: "The Stance of Legend",
    image: `${imgUrlRoot + 'Leg.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Leg_tn.jpg'}`,
    quotation: `'A miracle seemed to have happened. The reality of my leg, and the power to stand and walk again, had been given to me, had descended upon me like grace. Now, re-united with my leg - with a part of myself that been excommunicated, in Limbo - I found myself full of tender regard for it, and stroked the cast. I felt an immense feeling of Welcome for the lost leg, now returned. The leg had come home, to its home, to me. In action the body had been broken, and only now, with the return of bodily action as a whole, did the body itself again feel like a whole.' - Oliver Sacks`,
    top: 64.2,
    left: 42.7,
    tabs: [
      {name: "The Body Politic", content: `'Following this simple path can work, but there are
many common obstructions that often lead to serious
missteps. By recognizing the complications, we can
give change legs to overcome the challenges that
arise along the way. To answer our key question at
least partially, we might think of change as traveling
on four legs: frameworks, leaders, community, and
institutionalization.' - David N Perkins and James D Reese`},
      {name: "Out of Body Experience", content: `'In traditional Hollywood iconography, the impairment of a man’s leg or arm
(via paralysis, amputation, etc.) functioned
as a code for impotence, one ‘member’ substituting for another. After 1934, when Production Code Czar Joseph Breen began rigorously to police cinematic subtexts, however, cagey auteurs began to double the code
against itself in order to smuggle in forbidden sexual content. The stiff, limping leg
and its accompanying fetishes (the cane,
e.g.) were positioned in montage to suggest
perverse ‘inversion’—impotence-with-women-as-sexual-potency-with-men' - Nancy Steffen-Fluhr`},
      {name: "Corpus Delicti", content:`'It must have been about forty minutes later that Amyas complained of stiffness and pains. He said he thought he must have got a touch of muscular rehumatism. Amyas was always intolerant of any ailment and he didn't like being fussed over. After saying that he turned it off with a light: "Old age, I suppose. You've taken on a creaking old man, Elsa." I played up to him. But I noticed that his legs moved stiffly and querly and that he grimaced once or twice. I never dreamt that it wasn't rheumatism.' - Agatha Christie`},
      {name: "Foreign Body", content: `'No puedo dormir otra vez. Visité a un neurólogo. Un hombre alto y guapo. Me estoy enamorando de él. Me gusta este sentimiento. Estoy alegre. él realizó una encuesta. El sistema nervioso periférico no está perturbado. Esta noticia no es ni mala ni buena para mí. Nadie cree que haya un problema. El nombre de neurólogo es Igor. Que piensará él de mí? Igor también piensa que esoty deprimida. Los médicos no quieren entender sobre el Síndrome de piernas inquietas. - Kseniia Shantceva`},
      {name: "The Body Text", content:
        <p>
          Insurance: You are allowed ten socks/year<br/><br/>

          Insurance: You are not allowed to walk in oceans<br/><br/>

          Insurance: If you had fought for us, if you<br/>
          had lost your leg for us, for freedom, then<br/>
          we would cover the leg that walks in oceans<br/><br/>

          and why is it always a poem is a walk?<br/><br/>

          A poem is like a walk<br/>
          A poem is like going on a walk<br/>
          A walk is like a poem<br/>
          I was walking the other day and a poem tripped me<br/><br/>

          I was about to give up<br/><br/>

          Yes<br/>
          Yes<br/>
          I know<br/><br/>

          I am trying to walk the treadmill<br/>
          My leg beeps at 3 mph<br/>
          This is the conference for hackers<br/>
          Can somebody hack me<br/>
          Can somebody change my settings<br/><br/>

                            Jillian Weise
        </p>
      },
    ]
  },
  {
    id: 9,
    organ: "nose",
    title: "Old Factory of Sense",
    image: `${imgUrlRoot + 'Nose.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Nose_tn.jpg'}`,
    quotation: `'The conundrum of the human nose is as much cultural as zoological or biological. The organisation of modern Western culture is marked by the search for, and maintenance of, olfactory neutrality, and Edward Hall suggests the "extensive use of deodorants and suppression of odour in public places results in an olfactory blandness and sameness that would be difficult to duplicate anywhere else in the world". But, as Pasquale Gagliardi contends, organisations educate and shape our sensorium and perceptual faculties and in doing so develop in us a sense of how to behave. This is what Mary Douglas means when she suggests that the social body constrains how we perceive the physical body. The apparent cultural decline in the importance of smell expresses not just a shift in sensory priorities, but also a shift in the cultural and conceptual context of behaviour.' - J Martin Corbett`,
    top: 3.2,
    left: 43.7,
    tabs: [
      {name: "The Body Politic", content: `'Sometimes, white men of the antebellum pulled or tweaked one another's
 noses. Slaves never pulled anyone's nose; neither did white women. Nose pulling
 was a meaningful act that appeared almost exclusively in the active "vocabulary" of
 white men. To pull a nose was to communicate a complex set of meanings to an
 antagonist and an audience. What did the act mean to the men who performed it
 and witnessed it? The meaning of any act, like the meaning of words or phrases
 in written or spoken discourse, cannot be understood in isolation from its context.
 "Vocabulary" - whether written, spoken, or mimed - is always only a small part of
 a broader system of meaning. For Southern white men, nose pulling was an action
 embedded in a larger system of signs-a "language" of honor.' - Kenneth S Greenberg`},
      {name: "Out of Body Experience", content: `'Gradually the grip of anxiety loosened, and Grenouille began to feel safer. Towards noon he was his old cold-blooded self. He laid the index and middle fingers of his left hand under his nose and breathed along the backs of his fingers. He smelled the moist spring air spiced with anemones. He did not smell anything of his fingers. He turned his hand over and sniffed at the palm. He sensed the warmth of his hand, but smelled nothing. Then he rolled up the ragged sleeve of his shirt, buried his nose in the crook of his elbow. He knew that this was the spot where all humans smell like themselves. But he could smell nothing. He could not smell anything in his armpits, nor on his feet, nor around his genitals when he bent down to them as far as he possibly could. It was grotesque. He, Grenouille, who could smell other people miles away, was incapable of smelling his own genitals not a handspan away!' - Patrick Süskind`},
      {name: "Corpus Delicti", content:`'Jasmine and Gulliver arrived. Gulliver and Melanie greeted each like friends who haven't seen each other in years. I let them have their moment because I believed we were on a viable scent, and they were energized and pumped up from the trailing. They sniffed the contents of the Ziploc and went back to work. I knew that without their noses we would be up the creek without a paddle in identifying the man. There could be other evidence or a possible witness with some clue, but I felt this was our only chance in the here and now.' - Virginia Lanier`},
      {name: "Foreign Body", content: `'La matière et la forme sont créées à la fois. La matière réelle servant de pur analogon n'a pas son pouvoir de division. Ce nez perçu est divisible à l'infini, à un certain degré, il est non-nez. Ce nez saisi à travers l'analogon est entièrement nez, nez de part en part ou disparaît. Les divisions possibles sur la toile n'affectent pas le nez: le nez est acte. C'est l'idèe du nez se donnant un corps. Autrement dit, le nez est liberté.' - Jean-Paul Sartre`},
      {name: "The Body Text", content:
        <p>
          Be glad your nose is on your face,<br/>
          not pasted on some other place,<br/>
          for if it were where it is not,<br/>
          you might dislike your nose a lot.<br/><br/>

          Imagine if your precious nose<br/>
          were sandwiched in between your toes,<br/>
          that clearly would not be a treat,<br/>
          for you’d be forced to smell your feet.<br/><br/>

          Your nose would be a source of dread<br/>
          were it attached atop your head,<br/>
          it soon would drive you to despair,<br/>
          forever tickled by your hair.<br/><br/>

          Within your ear, your nose would be<br/>
          an absolute catastrophe,<br/>
          for when you were obliged to sneeze,<br/>
          your brain would rattle from the breeze.<br/><br/>

          Your nose, instead, through thick and thin,<br/>
          remains between your eyes and chin,<br/>
          not pasted on some other place—<br/>
          be glad your nose is on your face!<br/><br/>

          Jack Prelutsky
        </p>
      },
    ]
  },
  {
    id: 10,
    organ: "rib",
    title: "Like a Cage for Laughter",
    image: `${imgUrlRoot + 'Rib.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Rib_tn.jpg'}`,
    quotation: `'In many communities, such as mine, there are ongoing, active attempts to exclude evolution from the public school curriculum. Lecturing on evolution is an interesting challenge under these circumstances.
    But I always have the last laugh. I share it with my classes after they have counted ribs for themselves and know for themselves the correct answer. You see, I really do have one fewer pair of ribs than my mother.
    Don’t get me wrong: I’m perfectly normal. I have 12 pairs of ribs, just like almost every other human being, male or female. So, as far as we know, do my father and brother. My mother is the unusual one. She has 13 pairs of ribs.' - Robert S Root-Bernstein`,
    top: 27,
    left: 48.8,
    tabs: [
      {name: "The Body Politic", content: `'Political humor can also serve society by prompting healthy skepticism and keeping the powerful honest. It can defuse harsh discourse in society by making palatable what is hard to swallow in the often-contentious political sphere. While we can easily identify distinctions between political humor and conventional news media, political humor nonetheless has a social responsibility—like the traditional press—to honor values of human dignity, truthfulness, and nonmaleficence, even while gently ribbing our institutions, our leaders, and ourselves. In this way, political humor strengthens democracy.' -Jason T Peifer`},
      {name: "Out of Body Experience", content: `'A young man was singled out from the group to take her to her cousin's place. He gave her a sign to follow him. She had already been keeping her spare robe and that was all she owned. She tucked the robe under her arm. Nobody wished her good luck or anything like that, because they did not have the slightest idea what her intentions were. The young man slowed down to keep pace with her and to have a close look at her - not exactly at her, but at a part of her. The wind now had started to blow hard and Ebla's naked ribs showed more. She could feel the breeze fondling her belly; and the young man threw a sideways glance at the naked spot.' - Nuruddin Farah`},
      {name: "Corpus Delicti", content:`'A couple of the soldiers kicked the bodies aside when they had done, to make sure they were all dead. When they left, they set fire to the barn. The only reason Alan Macanespie's nights were disturbed by what had happened that afternoon was that there had been an unintended witness. One of the boys was not in fact dead. He'd been squeezed into the far corner of the barn. When the shooting started, he'd been flattened under the weight of bodies, briefly passing out in the crush. And so he'd appeared dead when the soldier's boot crashed into his ribs. He'd come to as the flames were taking hold of the barn. - Val McDermid`},
      {name: "Foreign Body", content: `'Sin quitar ni poner cosa alguna, sin oropeles verbales,
Miguel Hidalgo y Costilla, el sacerdote filósofo, el cura
caritativo, el capitán de multitudes, el protomártir civil,
ha lucido en la conciencia pública como el personaje más
típico y trascendente y de mayor influencia en la historia
de México. Sin lugar a dudas ha sido aceptado por todo
el hojaldre social y todas las regiones de la nación como
espejo y emblema del conjunto del Estado nacional y de sus
dos mil cuatrocientos municipios.' - Luis González y González`},
      {name: "The Body Text", content:
        <p>
          <br/>
        </p>
      },
    ]
  },
  {
    id: 11,
    organ: "spine",
    title: "Articulate and Fearless",
    image: `${imgUrlRoot + 'Spine.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Spine_tn.jpg'}`,
    quotation: `'The forward bend task, a standard procedure in clinical examination of the spine, is a composite motion that requires coordination of the hips, lumbar spine and thoracic spine. The relative contribution of these joints in this movement task is often used to help make clinical judgments regarding potential physiologic mechanisms underlying the patients’ low back pain (e.g., shortened muscles). However, our data suggest that performance on this task is influenced by a combination of pain and fear, each with independent effects on spine and hip joint motions. Thus clinicians should consider the potential role of psychological mechanisms (e.g., fear of pain and harm) when interpreting patient performance on this task.' - James S Thomas and Christopher R France`,
    top: 15.2,
    left: 47.2,
    tabs: [
      {name: "The Body Politic", content: `'Literature shows that politics remain associated with maleness in the American cultural discourse and, for a woman to be assigned or elected into an official position, she must display archetypical masculine characteristics while measuring her words and actions with a feminine tact. A first look at Nancy Pelosi's coverage in the papers in question confirmed this tightrope act. Portrayed as "very strong" and "decisive", the Speaker "knows what she wants". She is compared to Margaret Thatcher, a symbol of the masculine woman in politics, and is described as "more into the stick [than the carrot]"; but the woman with "the spine of steel" also possesses a "heart of gold". This tension between the two opposite personalities, one predominantly masculine and the other clearly – and stereotypically – feminine, characterizes the coverage.' - Yasmine Dabbous and Amy Ladley`},
      {name: "Out of Body Experience", content: `'The false conflict between those who advocate randomised trials in all situations and those who believe observational data provide sufficient evidence needs to be replaced with mutual recognition of their complementary roles. The fact that many surgical techniques or technologies were introduced into the field of spine surgery without randomised trials or prospective cohort comparisons makes obvious an even increased need for spine registries compared to joint arthroplasty. An essential methodological prerequisite for a registry is a common terminology for reporting results and a sophisticated technology that networks all participants so that one central data pool is created and accessed. Recognising this need, the Spine Society of Europe has researched and developed Spine Tango, the first European spine registry, which can be accessed under www.eurospine.org.' - C Röder, U Müller and M Aebi`},
      {name: "Corpus Delicti", content:`'Thomas unlocked the door and ushered the three agents into the papery silence of the cubicle that was his office. Unlike some of his colleagues, he had never made a "home" of his office. He had no comfy chairs for graduate groupies, no prints of Nietzsche, Skinner or Che Guevara, just books and sticky-notes. The agents scanned his shelves. The attractive blond ran an appreciative finger down the spine of his first and only work, Through the Brain Darkly. Agent Atta seemed to be looking for evidence of pornography or drug use. Either Dan Gerard was a restless man or he was distracted by the chaos. A mild OCD perhaps?' - Scott Bakker`},
      {name: "Foreign Body", content: `'Armados con fusiles y escasas municiones pero ansiosos de luchar por la
Libertad, salimos para el frente. Nuestra preocupación no era la comida, la
ropa ni el dinero, sino llegar pronto a Teruel. Con este ánimo nos encontramos
en el combate de Sarrión, y este espíritu hizo posible la victoria que allí se
obtuvo. La Columna de Hierro que surge de la victoria de Sarrión, es el nombre que, nacido espontáneamente, nos ha de agrupar a todos por un largo espacio de tiempo. Sin jefes que descuellen, pero con un puñado de compañeros,
capaces y esforzados, la Columna va salvando los obstáculos que se le presentan, y así, al mismo tiempo que se avanzan kilómetros, vase completando su
organización.' - José Segarra`},
      {name: "The Body Text", content:
        <p>So that the truant boy may go steady with the State,<br/>
So that in his spine a memory of wings<br/>
Will make his shoulders tense & bend<br/>
Like a thing already flown<br/>
When the bracelets of another school of love<br/>
Are fastened to his wrists,<br/>
Make a law that doesn’t have to wait<br/>
Long until someone comes along to break it.<br/><br/>

Larry Levis
        </p>
      },
    ]
  },
  {
    id: 12,
    organ: "throat",
    title: "Sore Art to Swallow",
    image: `${imgUrlRoot + 'Throat.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Throat_tn.jpg'}`,
    quotation: `'In normal speech and song, most of the energy is concentrated at the fundamental frequency, and harmonics are perceived as elements of timbre—the same quality that distinguishes the rich sound of a violin from the purer tones of a flute—rather than as different pitches. In throat-singing, however, a single harmonic gains such strength that it is heard as a distinct, whistlelike pitch. Such harmonics often sound disembodied. Are they resonating in the vocal tract of the singer, in the surrounding physical space or merely in the mind of the listener?' - Theodore C Levin and Michael E Edgerton`,
    top: 12,
    left: 43.4,
    tabs: [
      {name: "The Body Politic", content: `'In a 1919 speech to the United States Senate Committee on Foreign Relations, Woodrow Wilson described economic sanctions as a "peaceful, silent deadly remedy" and an effective, nonviolent method of coercing policy concessions from other states. Their track record, however, falls far short of Wilson’s characterization. First, sanctions fail in as many as 95 percent of cases. Second, they have failed as a "peaceful" alternative to armed conflict because they often generate significant collateral damage and impose severe costs on the target state’s population. These costs include increased unemployment, declining GNP, capital flight, lost foreign investment, reduced bilateral trade, increased corruption, drug and arms smuggling, and illegal trade syndicates, deteriorating public health standards, and other humanitarian costs. Thus, while Wilson’s famous description of sanctions is in retrospect less than accurate, he correctly characterized sanctions as a "hand upon the throat of the offending nation."' - Reed M Wood`},
      {name: "Out of Body Experience", content: `'Jebediah M Grant reported his work with Thomas L Kane to Brigham Young in a letter of
 15 April 1852, a month before the pamphlet was published. Earlier, while
 preparing the pamphlet, Grant, with a bravado that hinted at the coming
 reversal of the secrecy policy, had written the church president that
 "polygamy is the bone in the throat. But I shall give it to them as I would
 feed a hemlock tree to a jackass. It causes a great deal of coughing and
 sneezing, wind, etc."' - David J Whittaker`},
      {name: "Corpus Delicti", content:`'On October 19, Woodward dragged his balcony flower pot back into position to signal Deep Throat. At about one the next morning, he left his apartment for the long journey to the underground garage. He arrived at about 2:30 am. Deep Throat was not there. Fifteen minutes passed, then half an hour. An hour. Woodward was becoming worried. Deep Throat rarely missed an appointment. In the dark, cold garage, Woodward began thinking the unthinkable. It would not have been difficult for Haldeman to learn that the reporters were making inquiries about him. Maybe Deep Throat had been spotted? Woodward followed? People crazy enough to hire Gordon Liddy and Howard Hunt were crazy enough to do other things.' - Carl Bernstein and Bob Woodward`},
      {name: "Foreign Body", content: `'O cego, para não passar pela
angústia de arrastar-se de um assento ao outro, com a alavanca da caixa de
velocidades e o volante a atrapalhá-lo, teve de sair primeiro. Desamparado, no
meio da rua, sentindo que o chão lhe fugia debaixo dos pés, tentou conter a
aflição que lhe subia pela garganta. Agitava as mãos à frente da cara,
nervosamente, como se nadasse naquilo a que chamara um mar de leite, mas a
boca já se lhe abria para lançar um grito de socorro, foi no último momento que
a mão do outro lhe tocou de leve no braço, Acalme-se, eu levo-o. Foram
andando muito devagar, com o medo de cair o cego arrastava os pés, mas isso
fazia-o tropeçar nas irregularidades da calçada, Tenha paciência, já estamos
quase a chegar, murmurava o outro, e um pouco mais adiante perguntou, Está
alguém em sua casa que possa tomar conta de si, e o cego respondeu, Não sei, a
minha mulher ainda não deve ter vindo do trabalho, eu hoje é que calhei sair
mais cedo, e logo me sucede isto, Verá que não vai ser nada, nunca ouvi dizer
que alguém tivesse ficado cego assim de repente, Que eu até me gabava de não
usar óculos, nunca precisei, Então, já vê.' - José Saramago`},
      {name: "The Body Text", content:
        <p>Sick in bed with a sore throat,  <br/>
I can’t get out of my mind  <br/>
the image of the cat  <br/>
harpsichord from the eighteenth century,  <br/>
soothing a prince with laughter.  <br/>  <br/>

It worked like this: the tails of them attached  <br/>
to the strings of the instrument  <br/>
were pulled by different notes, and the difference  <br/>
between the way the cats  <br/>
cried was music.  <br/>  <br/>

Katie Peterson
        </p>
      },
    ]
  },
  {
    id: 13,
    organ: "back",
    title: "Where Monkies Write Blurbs",
    image: `${imgUrlRoot + 'Back.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Back_tn.jpg'}`,
    quotation: `'To a man-of-war's-man's experienced eye the marks of a naval scourging with the "cat" are through life discernible. And with these marks on his back, this image of his Creator must rise at the Last Day. Yet so untouchable is true dignity, that there are cases wherein to be flogged at the gangway is no dishonor; though, to abase and hurl down the last pride of some sailor who has piqued him, be sometimes the secret motive, with some mallicious officer, in procuring him to be condemned to the lash. But what torments must that seaman undergo who, while his back bleeds at the gangway, bleeds agonized drops of shame from his soul!' - Herman Melville`,
    top: 33.5,
    left: 50.7,
    tabs: [
      {name: "The Body Politic", content: `'Recent studies have emphasized the delimiting effects of chronic pain on worker
productivity and performance attenuation. For example, research documents that the four most often-recurring
medical conditions (i.e. headaches, arthritis, back pain, and musculoskeletal ailments)
decreased the productivity of approximately 13 percent of the workforce, equating to $62.1 billion in annual costs.
In terms of specific maladies, chronic back pain has been found to cost organizations
approximately $23 billion yearly, with much of the financial burden attributed to
productivity-related consequences. Recently, studies also have
examined the role of chronic pain on outcomes related to work contribution, including
job satisfaction and organizational citizenship
behavior (OCB).
Scholars have argued that pain occurrences and reactions are inherently individual. Accordingly, Gatchel et al. acknowledged that pain input "may be filtered through an individual’s genetic
composition, prior learning history, current psychological status, and sociocultural
influences."' - Gerald R Ferris, Laci M Rogers, Fred R Blass and Wayne A Hochwarter`},
      {name: "Out of Body Experience", content: `'"None of your business," he said. I stood up and walked over to him. He did not turn to face me. I had to address his back. "Now listen, Mr Bloom," I said to his back. "Let's get this straight. You are the boss of this pot-house. You are the producer and I'm the chief cutter, and if you say, "Cut," I cut. But if you ask me to cut the other woman out of a triangle story and make it a straight honeymoon for two, then I'm just itching to hand you the scissors and let you try for yourself." He looked at me over his shoulder with a tension in the muscles of his jaw. It was interesting to watch the movements which happened on his face.' - Cameron McCabe`},
      {name: "Corpus Delicti", content:`'His words died away in a dreadful gurgle, as the clergyman, his face diabolical with fury, sprang on him and gripped him by the throat. He shook the hunchback as a terrier shakes a rat, cursing horribly under his breath - and for a moment or two it seemed as if the other's fear was justified. There was murder in the big man's face, until the touch of the girl's hand on his arm steadied him and brought him to his senses. With a last spasm of fury he hurled the wretched Zadowa into a corner, and left him lying there; then his iron self-control came back to him.' - HC 'Sapper' McNeile`},
      {name: "Foreign Body", content: `'El dolor es una experiencia emocional, subjetiva y compleja con repercusión física, psicológica, social y laboral. Esta repercusión se manifiesta con toda intensidad en pacientes con dolor crónico. Su evaluación y tratamiento debe hacerse siguiendo un modelo biopsicosocial. El enfoque multidisciplinar de tratamiento del dolor incluyendo aspectos médicos, psicológicos y físicos ha demostrado ser más eficaz que el tratamiento con una sola modalidad.

El dolor lumbar crónico es un ejemplo de esta complejidad. En un 80% de los pacientes el dolor no se correlaciona con alteraciones orgánicas, factores emocionales y sociales tienen un peso importante. Hay que evaluar dichos factores tanto en el diagnóstico como en el tratamiento.' - M Rull`},
      {name: "The Body Text", content:
        <p>
        Here come the sidewalk boss again<br/>
Telling me how I can't cave in<br/>
That I'm a study in black<br/>
Need a pat on the back<br/>
I look up and smile<br/>
A picture of dissatisfaction<br/>
That he can only see as a junkie<br/>
Though I might be straight as an arrow<br/>
He's busy shaking hands with my monkey<br/>
Well I go in the car<br/>
Straight to the bar<br/>
Where my sweetie pours the beer<br/>
For the millions of fans ignoring the bands<br/>
He's in my ear<br/>
Wants me to live in denial<br/>
Says you've gotta settle for something<br/>
Though it might not be really living<br/>
Anything is better than nothing<br/><br/>

Elliott Smith
        </p>
      },
    ]
  },
  {
    id: 14,
    organ: "breast",
    title: "Going Bust from Hereon In",
    image: `${imgUrlRoot + 'Breast.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Breast_tn.jpg'}`,
    quotation: `'After the rape, Lucrece "wakes her heart by beating on her breast" and the poem puns on "chest" as body part and as box when she bid her leave to "find/Somepurer chest". Bodily pollution and hidden cruelty become entwined in images of corruption. Lucrece asks why should "tyrant folly lurk in gentles breasts" and, enraged, directs her anger onto herself as "patience is quite beaten from her breast". To clear herself from the stain of pollution she repeats Tarquin's invasive action and assails "her harmless breast" with a knife, following the model of the Philomel, who presses her nightingale's breast against a thorn.' - Alison Findlay`,
    top: 23.2,
    left: 33.7,
    tabs: [
      {name: "The Body Politic", content: `'Breast cancer surfaced on the public agenda in the 1970s and 1980s on
the second wave of feminism, as women began to present their personal
stories of the disease to the public. It slowly moved from being conceived
of as a private experience that could be overcome with a positive attitude
and a supportive family, to being politically relevant, especially in terms of
options for treatment. As women gained more control over treatment options, a breast cancer advocacy movement emerged, focused on increasing
research funding and finding a cure for the disease. While activists criticized
the medical control of their bodies, they did not challenge the biomedical
model that focused breast cancer research on methods for treatment, constrained medical strategies to lessen the possibility of getting breast cancer,
and promoted individualistic methods for cancer prevention. As the breast
cancer movement became more powerful, and the environmental movement
put more attention on health effects of toxics, a new breast cancer movement that combined the two emerged to challenge the biomedical model
and present what we term a new "public paradigm."' - Sarbina McCormick, Phil Brown and Stephen Zvestoski`},
      {name: "Out of Body Experience", content: `'So he sent the tip-up down again, and drove off. He knew that he could not drive off while the tip-up was coming down, and thus save time, because tip-up lorries do not work like that: while the engine is driving the tip-up mechanism through the gearbox, it cannot drive the roadwheels too. It could, it is technically possible; but that is not the way gearboxes are in general designed. And Christie returned the lorry whence it came, happy in his evening's work. It seems always he returns to the bosom of the Shrike: but wouldn't you?' - BS Johnson`},
      {name: "Corpus Delicti", content:`'Mary drew her legs up under her on the divan and turned on her side to face me. During the process the negligee fell open, but she took her time to draw it shut. Deliberately, she let my eyes feast on her lovely bosom. What I could see of her stomach was smooth parallel rows of light muscles, almost like a man's. I licked my lips and said, "How long do you expect to remain in town?" She smiled. "Just long enough so Esther can get her shopping spree over with. Her main joy in living is wearing pretty clothes, regardless of whether or not she's seen in them." "And yours?" "My main joy in living is living."' - Mickey Spillane`},
      {name: "Foreign Body", content: `'La historia de las mentalidades tiene que distinguirse de la historia de las
ideas contra la cual también en parte nació. No son las ideas de santo Tomás de
Aquino o de san Buenaventura las que dirigieron los espíritus a partir del siglo
XIII, sino nebulosas mentales en las que ecos deformados de sus doctrinas,
migajas depauperadas, palabras fracasadas sin contexto, han desempeñado un
papel. Pero hay que ir más lejos que este establecimiento de la presencia de
ideas embastardecidas en el seno de las mentalidades. La historia de las
mentalidades no puede hacerse sin estar estrechamente ligada a la historia de
los sistemas culturales, sistemas de creencias, de valores, de equipamiento
intelectual en el seno de las cuales se elaboran, han vivido y evolucionado. Así,
por lo demás, las lecciones que la etnología aporta a la historia podrán ser
eficaces.' - Jacques Le Goff`},
      {name: "The Body Text", content:
        <p>
        A wanderer is man from his birth.<br/>
He was born in a ship <br/>
On the breast of the river of Time; <br/>
Brimming with wonder and joy <br/>
He spreads out his arms to the light,<br/>
Rivets his gaze on the banks of the stream.<br/> <br/>

As what he sees is, so have his thoughts been. <br/>
Whether he wakes, <br/>
Where the snowy mountainous pass,<br/>
Echoing the screams of the eagles, <br/>
Hems in its gorges the bed <br/>
Of the new-born clear-flowing stream;<br/>
Whether he first sees light <br/>
Where the river in gleaming rings<br/>
Sluggishly winds through the plain; <br/>
Whether in sound of the swallowing sea — <br/>
As is the world on the banks, <br/>
So is the mind of the man. <br/><br/>

          Matthew Arnold
        </p>
      },
    ]
  },
  {
    id: 15,
    organ: "groin",
    title: "In the Bathroom, In the Bedroom",
    image: `${imgUrlRoot + 'Groin.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Groin_tn.jpg'}`,
    quotation: `'In Plato's account, it was when the psyche had passed out of a bodily region that was "low" and "physical" in another sense, the groin, the area of sexual lust and generation, that Socrates uncovered his face to make his last ironic remark, that he owed a cock to Asclepius, since he had now recovered from the sickness of being alive.' - Christopher Gill`,
    top: 47.8,
    left: 42.9,
    tabs: [
      {name: "The Body Politic", content: `'The original plan developed by the U.S. Army Corps of Engineers (USACE 1958) provided for
construction of dunes, fronting protective beaches, together with 23 groins if needed. Owing to
political and economic considerations (with law suits against the three levels of
Government (Federal, State, County) by private land owners settled in October, 1994), eleven
groins were constructed without placement ofthe dune and beach fill on the eastern 3.8 km of shore
extending westerly from a point 10.6 km east of Moriches Inlet. This work was supplemented in
1970 by construction of four groins extending 1.8 km west of the 11 groins, including beach fill in
the four new compartments. The groins are made of large quarry stone, and are 146 m long with
average spacing of 400 m.' - Nicholas C Kraus, Hans Hanson and Sten H Blomgren`},
      {name: "Out of Body Experience", content: `'When he held out two yellow capsules to her she said, "Will they destroy me?" She accepted them clumsily. "What?" he said, his face twitching. Rot my lower body, she thought. Groin to dry. "I mean," she said cautiously, "weaken my concentration?" "No - it's some AG Chemie product they give back home. I use them when I can't sleep. I'll get you a glass of water." He ran off. Blade, she thought. I swallowed it; now cuts my loins for ever. Punishment. Married to a Jew and shacking up with a Gestapo assassin. She felt tears again in her eyes, boiling. For all I have committed. Wrecked.' - Philip K Dick`},
      {name: "Corpus Delicti", content:`'He reached down and began tapping Samantha on the forehead with his index finger. He tapped hard with the cadence of a woodpecker. After half a dozen striked the sensation became uncomfortable. Simultaneously he began moving his pelvis back and forth. Samantha moved her head as far back as the wall behind her would allow, but the detective's groin brushed her cheek with each thrust. "You're a cocky little bitch," graveled the cop as he continued the incessant tapping. "Nearly eighty contraband tablets including narcotics and sedatives found in your work locker - not one damn prescription in your name for any of it, by the way - and pictures of you cavorting with a street whore we just busted with - now don't act too surprised - the very same kinds of pills you seem to have a large supply of! Can you believe it? I'm thinking your life just got a whole lot worse."' - David L Williams`},
      {name: "Foreign Body", content: `'La inadecuada altura del sillín es
consecuencia de la disminución en la flexibilidad de
la musculatura del tronco y miembros inferiores
especialmente los isquiotibiales.
El desajuste en la altura del sillín incide en la
cadencia del pedaleo especialmente para alcanzar la
ventaja mecánica; entendiendo la relación existente
entre la medida de la entrepierna vs la longitud de la
biela, el 36% de la población valorada presentó una
adecuada correlación entre dichas variables. Como
consecuencia se puede generar aumento en el gasto
metabólico y en la biomecánica del pedaleo.' - Fanny V Legarda, Nataly AS Zambrano and Camilo AP Velásquez`},
      {name: "The Body Text", content:
        <p>
        Didn’t Sappho say her guts clutched up like this?<br/>
Before a face suddenly numinous,<br/>
her eyes watered, knees melted. Did she lactate   <br/>
again, milk brought down by a girl’s kiss?   <br/>
It’s documented torrents are unloosed<br/>
by such events as recently produced<br/>
not the wish, but the need, to consume, in us,   <br/>
one pint of Maalox, one of Kaopectate.<br/>
My eyes and groin are permanently swollen, <br/>
I’m alternatingly brilliant and witless<br/>
—and sleepless: bed is just a swamp to roll in.   <br/>
Although I’d cream my jeans touching your breast,   <br/>
sweetheart, it isn’t lust; it’s all the rest<br/>
of what I want with you that scares me shitless.<br/><br/>

Marilyn Hacker
        </p>
      },
    ]
  },
  {
    id: 16,
    organ: "mouth",
    title: "Hot Food In, Hot Air Out",
    image: `${imgUrlRoot + 'Mouth.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Mouth_tn.jpg'}`,
    quotation: `'A fool does not delight in understanding,
        but only in airing his opinions.
        The words of a man’s mouth are deep waters;
        the fountain of wisdom is a bubbling brook.
        A fool’s lips bring strife,
        and his mouth invites a beating.
        A fool’s mouth is his ruin,
        and his lips are a snare to his soul.
        A gossip’s words are like choice morsels,
        and they sink into the inmost being.
        He who answers a matter before he hears it —
        this is folly and disgrace to him.
        The first to state his case seems right
        until another comes forward and examines him.
        Casting the lot ends quarrels
        and separates strong opponents.
        From the fruit of his mouth a man’s belly is filled;
        with the harvest from his lips he is satisfied.
        Life and death are in the power of the tongue,
        and those who love it will eat its fruit.' - Proverbs 18`,
    top: 5.8,
    left: 42.7,
    tabs: [
      {name: "The Body Politic", content: `'Perhaps a bigger problem with being a dentist is that you can't have a conversation with your patients, at least not much of a verbal exchange. Anything a patient says with a drainage pipe, cotton wool and gloved fingers in mouth is going to sound strangulated. It's no way to learn about the roots of social problems. It seems appropriate enough that Canetti, who spent twenty years of his life in London writing his unclassifiable book Crowds and Power, should seize on a symbol which, if you watch a lot of television, seems to be what television is best at revealing. In the world of show-biz TV, people smile, and they smile because they know that figuratively at least they're having you for breakfast; and the more the showmaster flashes his credentials (and everybody knows it's a faked smile) the more pitiless it all seems. This stopper-rod assembly, this fender-bar, this enamel xylophone of incisors, canines and premolars that makes a mouth: after years of orthodontic corralling and straightening, it may be perfect to the millimetre, every tooth a regular tombstone - but which tombstone ever had this effulgence, this phosphorescent veneer, this whiteness? There are mouths that fill screens.' - Iain Bamforth`},
      {name: "Out of Body Experience", content: `'He was reading a magazine. There was a faint white film or residue under his bottom lip, concentrated in the corners of his mouth, in the valley where the top and bottom lips meet. This happened most mornings, this white lip film. After he showered, it was usually gone. Was it toothpaste? Was it from breathing out of his mouth all night? Was it the mouth equivalent of eye boogers? When he read, he chewed very slowly, as if to conserve energy, as if concentrating on the words slowed hi ability to swallow. Sometimes theres was a long delay between the last revolution of jaw and his swallow. He'd wait for a bit and then dig out another overflowing spoonful from his bowl, holding it up absentmindedly. I thought he might drip milk onto his chin; each spoon was so full. But he didn't. He got it all into his mouth without a single drip. He rested the spoon in the bowl and wiped his chin, even though there was nothing on it. It was all done distractedly.' - Iain Reid`},
      {name: "Corpus Delicti", content:`'The hair was long gone, and the face, or what was left of it, was distorted beyond hope of recognition. The man's belly, swollen by the gas, had an umbilical hernia; the navel extruded like a turkey thermometer. When Dr Breen turned his attention to the man's mouth, running a gloved finger around inside the cavity, he wondered at first if somebody had built a fire in there. The tongue was charred, and there were bits of red and brown paper embedded in the palate. Most of the teeth were gone, and the cheeks, blackened and torn, hung in spongy strips over the ears, as if somebody had tried to pull the man's face inside out and failed. Dr Breen felt a hard object lodged in the throat and went after it with a hemostat.' - Anthony Bourdain`},
      {name: "Foreign Body", content: `'El teatro está lleno. Caden permanece de pie nervioso en la
parte trasera de la sala. Las luces se atenúan. Hazel mira
hacia atrás desde su asiento a Caden y gesticula con la
boca la palabra “¡Sí!”. Él sonríe. Se levanta el telón
sobre un escenario oscuro. Apenas puede distinguirse al
actor que interpreta a Alan, de pie en el centro del
escenario hociqueando el rostro de un caballo. Suaves
sonidos de corral. En las paredes laterales de la sala se
proyectan oscuras películas en blanco y negro. A la
izquierda son caballos al galope. A la derecha es una mujer
gateando sobre sus manos y rodillas. Al pie del escenario,
a la izquierda, un encendedor ilumina la cara de Dysart,
que lleva la cabeza vendada. Una vez que el cigarrillo
queda encendido, apaga el mechero y vuelve a desvanecerse
en una oscura silueta.' - Charlie Kaufman`},
      {name: "The Body Text", content:
        <p>
        My mouth is snow slowly caking that stiff pigeon.<br/>
My mouth, the intricately moist machinery of a plant.<br/>
I have forgotten if I ever had a mouth.<br/><br/>

I have two mouths.<br/>
One like warm rain;<br/>
or wind manipulating the worn limbs of an elm.<br/><br/>

My mouth knows nothing of music.<br/>
Or of the oils of love.<br/><br/>

Its shape is the shadow of innumerable pigeons;<br/>
its words, at times, their bones.<br/>
          <br/>
          Paul Carroll
        </p>
      },
    ]
  },
  {
    id: 17,
    organ: "otherHand",
    title: "De L'Autre",
    image: `${imgUrlRoot + 'OtherHand.jpg'}`,
    thumbnail: `${imgUrlRoot + 'OtherHand_tn.jpg'}`,
    quotation: <p>Tripartite schemes were all very well<br/>
for the builders who held their blueprints firmly<br/>
in hand beforehand. What did it matter<br/>
if the two vertical poles didn’t touch, seemed so<br/>
far apart, in fact, that no one who visited the site<br/>
could believe the architect’s arrogant babble?<br/><br/>

Rachel Wetzsteon</p>,
    top: 43.7,
    left: 22.7,
    tabs: []
  },
  {
    id: 18,
    organ: "poem",
    title: "Oh My Daze Leticia, What You Found??",
    image: `${imgUrlRoot + 'FullBody.jpg'}`,
    thumbnail: `${imgUrlRoot + 'FullBody_tn.jpg'}`,
    quotation: <p>
    Call me corpse<br/>
    Corpse knew not<br/>
    Corpse knew not he were dead<br/>
    Corpse ate and washed<br/>
    Corpse ate breakfast<br/>
    Corpse kissed wife<br/>
    Corpse went to office<br/><br/>

    Call me corpse<br/><br/>

    Corpse can grin<br/>
    Corpse can bear it<br/>
    Corpse can get accustomed<br/><br/>

    John Parlom
    </p>,
    top: 98,
    left: 10,
    tabs: []
  }
]

export default initialData
