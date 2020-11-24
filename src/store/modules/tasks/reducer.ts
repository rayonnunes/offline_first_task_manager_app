import { TasksAction, TasksState } from './types'

const initialState: TasksState = {
  tasksData: [
    {
      id: 1,
      title: 'Through Time and Space',
      description:
        "News that Ciri and Geralt had defeated and killed Imlerith reached Avallac'h at once. I don't know how this happened, exactly, save perhaps that quickly learning of such things is the very essence of being a \"Sage.\" At any rate, a wild notion possessed him. What if they could now sway Ge'els, one of Eredin's most powerful allies? What if they could bring him over to their side? A key general and advisor, Ge'els was the individual Eredin relied on for reinforcements. For his plan to work, he would need a dreamer, so Triss pointed him towards Corinne Tilly in Novigrad. Thus, by the time Geralt and Ciri rode into town, everything had been arranged. Now all they needed was Ge'els... To reach him, Avallac'h and Geralt would need to travel to the land of the Aen Elle, a voyage that would involve interdimensional travel, which in turn meant a whole lot of teleporting. Geralt vomited a little in his mouth and prepared to face the music. An unpleasant surprise was in store for Geralt after he departed the Ddiddiwedht Desert: Avallac'h was no longer with him. The Sage had warned him that something of the sort might happen, but Geralt had quietly hoped this would not be the case. His hopes had been misplaced, and now the witcher would have to stumble blindly and alone as he searched for the passage to the next world. Ah, what I wouldn't give to see with my own eyes what Geralt saw in the worlds he traversed. Yet most intriguing of all seemed the world of the Aen Elle, the end point of Geralt's and Avallac'h's journey. To behold the glories of this ancient elven civilization... but alas, fate granted this privilege not to a poet but to a witcher, who returned not with paeans to the distant world's beauty, but with a general of the Wild Hunt - one Ge'els. I must be fair, however, and state that the general proved useful. Avallac'h decided to bet all on the ace he had tucked up his sleeve. With the help of the dreamer Corinne Tilly, he proved to Ge'els that Eredin had killed Auberon, the erstwhile king of the Aen Elle and the object of Ge'els' undying devotion. Confronted by this revelation, Ge'els could hardly return to business as usual. He struggled internally for some moments before revealing the one way Geralt and friends could hope to defeat Eredin and company. They would have to battle Eredin and the Hunt in their own world and on their own terms. The first step - to use the Sunstone to summon the Naglfar. A plan of action was devised - Geralt, Ciri, the sorceresses and Avallac'h would sail to Skellige to find the stone, while Zoltan and I would stay behind in Novigrad to keep the hearth fires burning and secure our friends' return.",
      status: 'scheduled',
      dueDateTime: '2020-11-22T08:30:24-03:00',
    },
    {
      id: 2,
      title: "A Bard's Beloved",
      description:
        'Geralt happened across a terrified bard who trembled when he spoke of his "beloved", yet other than that refused to say an ill word about the woman. Even stranger, everything seemed to indicate his betrothed lived in a cave. Geralt decided to check out what sort of curious couple he was dealing with. It turned out the bard\'s "beloved" was a hideous water hag. No wonder the thought of her caress made him shake in fear and revulsion. Geralt dealt with her as he usually deals with monsters.',
      status: 'finished',
      dueDateTime: '2020-11-22T12:00:24-03:00',
    },
    {
      id: 3,
      title: 'A Frying Pan, Spick and Span',
      description:
        "Many think that the life of a witcher consists of nothing but adventure after grand adventure, an endless stream of contracts on manticores, bruxae and other exotic beasts. In truth, Geralt would often take on more banal tasks, ones lesser bards fear mentioning, for they lack the skill required to make a masterwork of the mundane. By way of example, once in White Orchard he was hired to retrieve a woman's... frying pan. A mysterious gentleman had borrowed the frying pan from a little old lady and not returned it. While investigating this damned unneighborly act, Geralt discovered the delinquent borrower had other, more serious sins on his conscience... murder, for example. The half-burned notes Geralt found in his abandoned hut made it clear he was interested in the movements of Nilfgaardian forces and confidential military secrets - in other words, the man was a spy. Geralt found the frying pan and returned it to the old woman. She was overcome with joy and gratitude - not only did she have her precious cooking utensil back, but someone had scrubbed it clean for her as well!",
      status: 'overdue',
      dueDateTime: '2020-11-22T18:55:24-03:00',
    },
  ],
  loading: false,
  status: '',
  message: '',
}

const user = (state = initialState, action: TasksAction): TasksState => {
  switch (action.type) {
    case '@tasks/GET_TASKS':
      return state
    case '@tasks/GET_TASKS_LOADING':
      return state
    case '@tasks/GET_TASKS_SUCCESS':
      return state
    case '@tasks/GET_TASKS_FAILED':
      return state
    default:
      return state
  }
}

export default user
