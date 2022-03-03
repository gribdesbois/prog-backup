
#!/usr/bin/python
#golf
#code angel

import sys
import os
import pygame
from pygame.locals import *
import random

#define colours

WHITE = (255, 255, 255)
GREY = (62, 87, 113) 

#define constants
SCREEN_WIDTH = 640
SCREEN_HEIGHT = 480

SCOREBOARD_MARGIN = 4
SCOREBOARD_HEIGHT = 48
SCOREBOARD_LINE = 20
SCOREBOARD_COLUMNS = 10

HOLE_MESSAGE_Y = 60

METER_X = 25
METER_Y = SCOREBOARD_HEIGHT + 20

SLIDER_BORDER = 5
SLIDER_X = 35
SLIDER_TOP_PADDING = 8

SLIDER_SPEED = 5
SLOW_SLIDER_SPEED  = 20
SLOW_PUTT_RANGE = 3

MAX_POWER = 30
MIN_POWER = 1

START_BALL_X = 20
BALL_Y = 436
BALL_STEP = 3
BALL_DESCENT = 5

FLAG_Y = 244
RANDOM_FLAG_MIN = 10
RANDOM_FLAG_MAX = 30
FLAG_STEP = 18
HOLE_CENTRE = 8


#setup
os.environ['SDL_VIDEO_CENTERED'] = '1'
pygame.mixer.pre_init(44100, -16, 2, 512)
pygame.mixer.init()
pygame.init()
game_screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Golf')
clock = pygame.time.Clock()
font = pygame.font.SysFont('Helvetica', 16)

#Load Images
background_image = pygame.image.load('golf_background.png').convert() 
power_meter_image = pygame.image.load('power_meter.png').convert()
slider_image = pygame.image.load('slider.png').convert_alpha()
ball_image = pygame.image.load('ball.png').convert_alpha()

flag_1_image = pygame.image.load('flag_1.png').convert_alpha()
flag_2_image = pygame.image.load('flag_2.png').convert_alpha()
flag_3_image = pygame.image.load('flag_3.png').convert_alpha()

#Load sounds
putt_sound = pygame.mixer.Sound('putt.ogg')
clap_sound = pygame.mixer.Sound('clap.ogg')



def main():

	#initialiser variables
	slider_direction = 'up'
	slider_timer = SLOW_SLIDER_SPEED
	shot_power = 1
	meter_height = power_meter_image.get_rect().height - 2 * SLIDER_BORDER

	ball_x = START_BALL_X
	ball_distance = 0
	ball_direction = 'right'
	final_ball_location = 0
	moves_per_flag = FLAG_STEP / BALL_STEP

	flag_distance = random.randint(RANDOM_FLAG_MIN, RANDOM_FLAG_MAX)

	flag_x = flag_distance * FLAG_STEP + HOLE_CENTRE

	hole = 1

	hole_strokes = [0, 0, 0]
	round_strokes = 0
	best_round_strokes = 0

	in_the_hole = False


	#MAIN LOOP

	while True:

		for event in pygame.event.get():

			key_pressed = pygame.key.get_pressed()

			#SPACE KEY pressed - hit shot
			if key_pressed[pygame.K_SPACE] and  ball_distance == 0 and in_the_hole is False:
				slider_direction = 'none'
				ball_distance = shot_power * moves_per_flag

				hole_strokes[hole - 1] += 1
				if ball_direction == 'right':
					final_ball_location += shot_power
				else:
					final_ball_location -= shot_power
					putt_sound.play()

			if event.type == QUIT:
				pygame.quit()
				sys.exit()


		#update slider
		slider_timer -= 1

		if slider_timer == 0:

			#slider moving up, increase shot power
			if slider_direction == 'up':
				shot_power += 1
				if shot_power == MAX_POWER:
					slider_direction = 'down'


			#slider moving down, decrease shot power
			elif slider_direction == 'down':
				shot_power -=1
				if shot_power == 'MIN_POWER':
					slider_direction = 'up'

			#new timer pause
			if shot_power <= SLOW_PUTT_RANGE:
				slider_timer = SLOW_SLIDER_SPEED
			else:
				slider_timer = SLIDER_SPEED


		#update ball location
		if ball_distance > 0:

			if ball_direction == 'right':
				ball_x += BALL_STEP
			else:
				ball_x -= BALL_STEP


			#ball gone off left or right hand edge of screen
			if ball_x > SCREEN_WIDTH or ball_x < 0:

				#reset ball location a left of screen
				ball_x = START_BALL_X
				ball_distance = 0
				ball_direction = 'right'
				shot_power = 1

				#reset slider at bottom of meter
				slider_direction = 'up'
				final_ball_location = 0
				slider_timer = SLOW_SLIDER_SPEED

				#ball is still on screen so move ball closer to final_ball_position
			else:
				ball_distance -= 1

				#ball has stopped rolling
				if ball_distance == 0:

					#ball in hole
					if final_ball_location == flag_distance:
						in_the_hole = True
						round_strokes += hole_strokes[hole -1]

						clap_sound.play()

					#ball missed hole
					else:
						if final_ball_location < flag_distance:
							ball_direction = 'right'
						else:
							ball_direction = 'left'

						#reset slider a botton of meter
						shot_power = 1
						slider_direction = 'up'
						slider_timer = SLOW_SLIDER_SPEED


		#draw background
		game_screen.blit(background_image, [0, 0])

		#draw meter and slider
		if ball_distance == 0 and in_the_hole is False:
			game_screen.blit(power_meter_image, [METER_X, METER_Y])

			slider_step = (MAX_POWER - shot_power) * meter_height / MAX_POWER
			slider_y = METER_Y + SLIDER_BORDER + slider_step - SLIDER_TOP_PADDING
			game_screen.blit(slider_image, [SLIDER_X, slider_y])

		#draw flag
		if hole == 1:
			game_screen.blit(flag_1_image, [flag_x, FLAG_Y])
		elif hole == 2:
			game_screen.blit(flag_2_image, [flag_x, FLAG_Y])
		elif hole == 3:
			game_screen.blit(flag_3_image, [flag_x, FLAG_Y])

			if in_the_hole is False:
				game_screen.blit(ball_image, [ball_x, BALL_Y])
			else:
				game_screen.blit(ball_imagem [ball_x, BALL_Y + BALL_DESCENT])

		pygame.display.update()
		clock.tick(30)



def in_hole_message(hole_number, hole_strokes, round_strokes):

	if hole_number == 3:
		message = 'Round completed in ' + str(round_strokes) + '. Press RETURN to play another round'
		text = font.render(message, True, WHITE)
	else:
		message = 'In the hole in ' + str(hole_strokes) + '. Press RETURN to play next hole'
		text = font.render(message, True, WHITE)

	background_x = SCOREBOARD_MARGIN * 4
	background_width = SCREEN_WIDTH - SCOREBOARD_MARGIN * 8
	background_height = 2 * SCOREBOARD_LINE
	message_background_rect = (background_x, HOLE_MESSAGE_Y, background_width, background_height)
	pygame.draw.rect(game_screen, GREY, message_background_rect)

	text_rect = text.get_rect()
	message_x = (SCREEN_WIDTH - text_rect.width) / 2
	message_y = HOLE_MESSAGE_Y + SCOREBOARD_LINE / 2
	game_screen.blit(text, [message_x, message_y])
	



if __name__ == '__main__':
	main()