

#handle text display
def display_scoreboard_data(scoreboard_text, alignment):
	display_text = font.render(scoreboard_text, True, WHITE)
	text_rect = display_text.get_rect()

	text_loc = [0, 0]

	if alignment == 'Left':
		text_loc = [SCOREBOARD_MARGIN, SCREEN_HEIGHT - SCOREBOARD_HEIGHT]

	elif alignment == 'Centre':
		text_loc = [(SCREEN_WIDTH - text_rect.width) / 2, SCREEN_HEIGHT - SCOREBOARD_HEIGHT]

	game_screen.blit(display_text, text_loc)


#display end of game message

def display_game_over():
	game_over_rect = (3 * SCOREBOARD_HEIGHT, 8 * SCOREBOARD_HEIGHT, SCREEN_WIDTH - SCOREBOARD_HEIGHT * 6, SCOREBOARD_HEIGHT * 5)

	pygame.draw.rect(game_screen, DARK_GREEN, game_over_rect)

	text_line_1 = font.render('GAME OVER', True, WHITE)
	text_rect_1 = text_line_1.get_rect()
	text_line_1_loc = [(SCREEN_WIDTH - text_rect_1.width) / 2, (SCREEN_HEIGHT / 2) - 16]

	text_line_2 = font.render('HIT RETURN FOR A NEW GAME', True, WHITE)
	text_rect_2 = text_line_2.get_rect()
	text_line_2_loc = [(SCREEN_WIDTH - text_rect_2.width) / 2, (SCREEN_HEIGHT / 2) + 16]

	game_screen.blit(text_line_1, text_line_1_loc)
	game_screen.blit(text_line_2, text_line_2_loc)



if __name__ == '__main__':
	main()
