#!/usr/bin/python
#alien invasion
#code angel

import sys
import os
import pygame
from pygame.locals import *
import random

#define the colors
LIGHT_YELLOW = (255, 255, 204)
WHITE = (255, 255, 255)

#CONSTANTS
SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480
SCOREBOARD_MARGIN = 4

MISSILE_PLATFORM = 31
MISSILE_SPEED = 10
GAME_MISSILES = 20

UFO_UPPER_Y = 20
UFO_LOWER_Y = 240
UFO_HIT_TIME = 20
UFO_OFF_TIME = 60
UFO_SCORE = 50

RANDOM_VERTICAL_CHANGE = 20
RANDOM_HORIZONTAL_CHANGE = 100
UFO_DIRECTIONS = ['left', 'right', 'up', 'down']

RANDOM_RAY = 200
RANDOM_RAY_TIME_MAX = 120
RANDOM_RAY_TIME_MIN = 30

BASE_SPEED = 6

#SETUP
os.environ['SDL_VIDEO_CENTERED'] = '1'
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.mixer.init()
pygame.init()
game_screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Alien Invasion')
pygame.key.set_repeat(10, 20)
clock = pygame.time.Clock()
font = pygame.font.SysFont('Helvetica', 16)

#Load images
background_image = pygame.image.load('background.png').convert()
base_image = pygame.image.load('base.png').convert_alpha()
missile_image = pygame.image.load('missile.png').convert_alpha()
missile_fired_image = pygame.image.load('missile_fired.png').convert_alpha()

ufo_1_image = pygame.image.load('ufo 1.png').convert_alpha()
missile_fired_image = pygame.image.load('missile_fired.png').convert_alpha()
ufo_2_image = pygame.image.load('ufo 2.png').convert_alpha()
ufo_1_exploded_image = pygame.image.load('ufo 1 exploded.png').convert_alpha()
ufo_2_exploded_image = pygame.image.load('ufo 2 exploded.png').convert_alpha()
ufo_ray_image_1 = pygame.image.load('ufo ray 1.png').convert_alpha()

