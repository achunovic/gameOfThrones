const myModal = new jBox('Modal', {
  attach: '.js-modal-btn',
  title: 'Bill',
  content: '<h1>Hi</h1>',
  position: {
      x: 'center', 
      y: 'center',
  },
});

const $modalBtn = $('.js-modal-btn');

const onModalBtnClicked = (e) => {

	const $title = e.currentTarget.querySelector('.js-title')
	const $desc = e.currentTarget.querySelector('.js-desc')

	const titleContent = $title.innerHTML;
	const descContent = $desc.innerHTML;


	myModal.setTitle(titleContent);
	myModal.setContent(descContent);

	myModal.open()
}

$modalBtn.click(onModalBtnClicked);