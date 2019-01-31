import brainTn from './Brain_tn.jpg';
import handTn from './Hand_tn.jpg';
import gutTn from './Gut_tn.jpg';
import brain from './Brain.jpg';
import hand from './Hand.jpg';
import gut from './Gut.jpg';


const initialData = [
  {
    id: 1,
    organ: "brain",
    title: "Headquartered in the Nerve Centre",
    image: brain,
    thumbnail: brainTn,
    quotation: "'It is certainly now common knowledge that the brain, even although a physical organ, bears some intimate relation to the mind; and this knowledge is manifestly embodied in common idiom. When referring to admittedly mental happenings or conditions we speak of racking one’s brains, picking another’s brains, having it on the brain, having a good brain or, contrariwise, being all brawn and no brain; and so on.' - CV Borst",
    bottom: 715,
    left: 110
  },
  {
    id: 2,
    organ: "hand",
    title: "Manoeuvre, Manufacture, Manipulate",
    image: hand,
    thumbnail: handTn,
    quotation: "'Possession of a fully developed hand profoundly transformed the relationship of the human being to its own body, thus altering the relationship between humans and the natural world. The interaction of the hand with the rest of the body brought about self-consciousness and laid the foundations for the unique sense of agency that is experienced by humans.' - of Raymond Tallis",
    bottom: 650,
    left: 250
  },
  {
    id: 3,
    organ: "gut",
    title: "A Hunger and an Instinct",
    image: gut,
    thumbnail: gutTn,
    quotation: `'Embedded in the expression "gut feeling" is the notion that the gut is the first part of the body to respond to the environment, producing an emotional sixth sense that governs rational thought processes. This concept is not so foreign to our current physiological models in which the intestinal tract from mouth to anus is described as an exterior organ that mediates between the outside world and the internal viscera, with the intestinal epithelium providing an immunological gateway between self and other.' - M Mathias and AM Moore`,
    bottom: 960,
    left: 60
  }
]

export default initialData
