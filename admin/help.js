exports.allmenu = (prefix, namaowner) => {
	return `[ *GAME-BOT[0]* ]

~> [ *MENU* ]
> *${prefix}login*
> *${prefix}runtime*
> *${prefix}speed*
> *${prefix}donate*
> *${prefix}sticker*

~> [ *OWNER* ]
> *${prefix}bc*
> *${prefix}join*
> *${prefix}leave*

~> [ *GAME* ]
> *${prefix}buykarakter*
> *${prefix}duel*

© By ${namaowner}`
}
