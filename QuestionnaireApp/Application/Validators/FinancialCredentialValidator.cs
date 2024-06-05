using Application.DTOs.FinancialCredential;
using Application.Validators.Domain;
using FluentValidation;

namespace Application.Validators;

public class FinancialCredentialValidator : AbstractValidator<FinancialCredentialDto>
{
    public FinancialCredentialValidator()
    {
        RuleFor(x => x.BIK)
            .NotNull().NotEmpty().Length(DigitStringConstants.BIKLength).Matches("[0-9]");

        RuleFor(x => x.CheckingAccount)
            .NotNull().NotEmpty().Length(DigitStringConstants.CheckingAccountLength).Matches("[0-9]");

        RuleFor(x => x.CorrespondentAccount)
            .NotNull().NotEmpty().Length(DigitStringConstants.CorrespondentAccountLength).Matches("[0-9]");
        
        RuleFor(x => x.BankName)
            .NotNull().NotEmpty().WithMessage("Bank name is required.");
    }
}