class Animal:

    def __init__(self, name, color):
        self.name = name
        self.color = color

    @classmethod
    def get_list(cls):
        animals = [
            cls("Mimikyu", "Amarillo"),
            cls("Xenomorph", "Negro"),
            cls("Totoro", "Gris"),
            cls("Milotic", "Crema con Azul y Negro"),
            cls("Hawlucha", "Verde con Blanco")

        ]
        return animals