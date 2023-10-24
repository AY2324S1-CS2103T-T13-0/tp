package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import seedu.address.model.Model;
import seedu.address.model.moduleplan.ModulePlan;

/**
 * Clears the module plan.
 */
public class ClearCommand extends Command {

    public static final String COMMAND_WORD = "clear";
    public static final String MESSAGE_SUCCESS = "Module list has been cleared!";


    @Override
    public CommandResult execute(Model model) {
        requireNonNull(model);
        model.setModulePlan(new ModulePlan());
        return new CommandResult(MESSAGE_SUCCESS);
    }
}
