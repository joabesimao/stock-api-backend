import { WalletController } from './controllers/WalletController';

const controller = new WalletController();

const form = document.querySelector('.form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  controller.add();
});
