using Application.DTOs;

namespace Application.Interfaces.Services;

public interface IIndividualEntrepreneurService
{
    Task<bool> AddIndividualEntrepreneurAsync(IndividualEntrepreneurDto individualEntrepreneur);
}