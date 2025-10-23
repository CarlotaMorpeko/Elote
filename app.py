from flask import Flask, render_template, request
from entities.palindrome import Palindrome
from entities.abba_money import Conversor
from entities.animal import Animal
from entities.randomizer import Randomizer

app = Flask(__name__)

# Esta sera la ruta index de la pagina principal
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/math')
def math():
    return render_template('math.html')

@app.route('/azulejos')
def azulejos():
    return render_template('azulejos.html')

@app.route('/palindrome', methods=['GET', 'POST'])
def palindrome():
    if request.method == 'POST':
        phrase = request.form.get('input_phrase', '')

        p = Palindrome(phrase)
        result = p.is_palindrome()
        return render_template('resulti.html', resultado=result)
    return render_template('palindrome.html')

@app.route('/abba', methods=['GET', 'POST'])
def abba():
    if request.method == 'POST':
        number = request.form.get('input_number', '')
        number

        p = Conversor(number)
        result = p.is_money()
        return render_template('cambio.html', resultado=result)
    return render_template('abba.html')

@app.route('/pokemons')
def animals():
    return render_template('pokemons.html', animals = Animal.get_list())

@app.route('/mcsorteositson', methods=['GET', 'POST'])
def mcsorteositson():
    if request.method == 'POST':
        number1 = request.form.get('input_Mcnumber', '0')
        number2 = request.form.get('input_Mcnumber2', '0')
        number3 = request.form.get('input_Mcnumber3', '0')
        
        n = Randomizer(number1, number2, number3)
        
        result = n.is_jackpot()
        return render_template('jackpot.html', resultado=result)
    return render_template('mcsorteositson.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5147)