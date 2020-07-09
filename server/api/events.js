const router = require('express').Router()
const {User, Event, UserEvent} = require('../db/models')
const {isAdmin} = require('./gatekeeper')
module.exports = router

// Get upcoming events for the user
router.get('/', async (req, res, next) => {
  try {
    const events = await Event.findAll({
      include: [
        {
          model: User,
          where: {
            id: req.user.dataValues.id,
          },
        },
      ],
    })
    if (events) {
      res.json(events)
    }
  } catch (err) {
    next(err)
  }
})

//create an event as a user
router.post('/', async (req, res, next) => {
  try {
    const {name, time, location, allowSuggestions, initialDueDate} = req.body
    const event = await Event.create({
      name,
      time,
      location,
      allowSuggestions,
      initialDueDate,
    })
    if (event) {
      res.json(event)
    } else {
      res.status(401).send('can not create events')
    }
  } catch (error) {
    next(error)
  }
})

// router.put('/:id', async (req, res, next) => {
//   try {
//     if (req.user && isAdmin(req.user)) {
//       const updatedEvent = await Event.updateEvent(req.params.id, req.body)
//       res.json(updatedEvent)
//     } else {
//       res.status(401).send('Unauthorized to edit events')
//     }
//   } catch (error) {
//     next(error)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     if (req.user && isAdmin(req.user)) {
//       const deletedCount = await Event.destroy({
//         where: {
//           id: req.params.id,
//         },
//       })
//       if (deletedCount) res.status(200).send(`Event ${req.params.id} deleted`)
//       else res.status(404).send(`Event ${req.params.id} not found`)
//     } else {
//       res.status(401).send('Unauthorized to delete event')
//     }
//   } catch (error) {
//     next(error)
//   }
// })
