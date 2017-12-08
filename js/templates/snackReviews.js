function snackReviewTemplate(snack) {
  return `<div class='container-fluid reviewBox'>
      <div class='title'>
        <p class='strongP'>Snack Name</p>
      </div>
      <div>
        <div class='inputLine'>
          <p class='strongP'>Name: </p><span>User's Name</span>
        </div>
        <div class='inputLine'>
          <p class='strongP'>Rating: </p><span>5</span>
        </div>
        <div class='inputLine'>
          <p class='strongP'>Review: </p><span>Gingerbread cake jelly pudding jelly beans. Fruitcake gingerbread wafer wafer gingerbread apple pie marshmallow. Biscuit jelly cookie dragée brownie dessert carrot cake macaroon bonbon. Unerdwear.com liquorice marshmallow fruitcake caramels dessert gingerbread.</span>
        </div>
      </div>
    </div>`
}

module.exports = {
  snackReviewTemplate,
}
