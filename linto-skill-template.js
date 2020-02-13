const debug = require('debug')('linto:skill:v2:linto-skill:template')
const LintoSkillNode = require('@linto-ai/linto-components').nodes.lintoSkillNode
const { template } = require('@linto-ai/linto-components').components

const PALETTE_NODE_NAME = 'Template'
const SKILL_NAME = 'linto-skill-template'

class LintoSkillTemplate extends LintoSkillNode {
  constructor(RED, node, config) {
    super(RED, node, config, __dirname)

    this.init()
  }

  async init() {
    await this.configure() // Autoload events, controllers and data folder
  }
}

module.exports = function (RED) {
  function Node(config) {
    RED.nodes.createNode(this, config)
    new LintoSkillTemplate(RED, this, config)
  }

  RED.nodes.registerType(SKILL_NAME, Node,
    {
      settings: {
        lintoSkillTemplate: {
          value: {
            skillName: SKILL_NAME,
            htmlTemplate: template.settupSkillTemplate(PALETTE_NODE_NAME),
            command: LintoSkillNode.loadFile(__dirname, 'data/command.md')
          },
          exportable: true
        }
      }
    })
}

