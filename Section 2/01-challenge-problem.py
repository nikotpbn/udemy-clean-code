from tkinter import Y


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, starting_point, length, height):
        self.starting_point = starting_point
        self.length = length
        self.height = height

    def area(self):
        return self.length * self.height

    def end_points(self):
        top_right = self.starting_point.x + self.height
        bottom_left = self.starting_point.y + self.length
        print('Starting Point (X)): ' + str(self.starting_point.x))
        print('Starting Point (Y)): ' + str(self.starting_point.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def build_rectangle():
    starting_point = Point(50, 100)
    rect = Rectangle(starting_point, 90, 10)

    return rect


rectangle = build_rectangle()

print(rectangle.area)
rectangle.end_points()