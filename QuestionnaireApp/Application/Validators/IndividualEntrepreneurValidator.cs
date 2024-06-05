using Application.DTOs;
using Application.Validators.Domain;
using FluentValidation;

namespace Application.Validators;

public class IndividualEntrepreneurValidator : AbstractValidator<IndividualEntrepreneurDto>
{
    public IndividualEntrepreneurValidator()
    {
        RuleFor(x => x.RegisterDate)
            .NotNull();
        RuleFor(x => x.ScanContract)
            .Must(ValidationHelpers.FileValidate)
            .When(x=>!x.LackContract);

        RuleFor(x => x.ScanINN)
            .Must(ValidationHelpers.FileValidate);

        RuleFor(x => x.ScanEGRIP)
            .Must(ValidationHelpers.FileValidate);

        RuleFor(x => x.ScanOGRNIP)
            .Must(ValidationHelpers.FileValidate);
        
        RuleFor(x => x.INN)
            .NotNull().NotEmpty().Length(DigitStringConstants.INNLength).Matches("[0-9]");

        RuleFor(x => x.FinancialCredentials)
            .Must(x => x.Count > 0);

        RuleFor(x => x.OGRNIP)
            .NotNull().NotEmpty().Length(DigitStringConstants.OGRNIPLength).Matches("[0-9]");
    }
}