[View documentation](https://dweng0.github.io/securetransactions/)

![Advanced Research](./advancedresearch.png)


## Project Goal
To explore the integrity of communications using blockchains.

Blockchain technology can be used for more then just digital currency. It can be used as a digital ledger and a ledger can be applied to any form of communication between two people

This repo take a look at the concept of storing and recieving data and insuring its integrity via a block chain.

This proof of concept has use cases in where non-authorative/authorative P2P networks are being used. Whereby all connected parties authorise each others movements via ledger checking.

In games like EliteDangerous where one person 'hosts' the instance and everyone connects to him, we are ensuring that the host cannot cheat by ledgering his actions against everyone elses.

This is a proof of concept based on [this paper](https://www.researchgate.net/publication/318131748_An_Overview_of_Blockchain_Technology_Architecture_Consensus_and_Future_Trends) 



## Usage

In the command line

make sure all packages are installed `npm install`

watch changes using grunt `grunt watch` this will automatically update verison numbers, compile and create documentation when changes are made, alternatively you could:

compile typescript and copy over assets by using `webpack`

For the purpose of testing the files are compiled and accessible from `dist\index.html` (open dev tools and explore results).

documentation is available at `/docs`
